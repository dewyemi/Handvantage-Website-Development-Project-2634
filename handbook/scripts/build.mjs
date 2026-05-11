/**
 * build.mjs — render the Vantage Workspace handbook to PDF.
 *
 * Reads structured content from ../content/, fills the HTML template
 * in ../src/template.html, and uses Puppeteer (headless Chrome) to
 * render to PDF at ../dist/handbook.pdf. Also copies the PDF into
 * ../../workspace-handvantage-com/public/downloads/ so the live site
 * can serve it.
 *
 * Run: cd handbook && npm run build
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const TEMPLATE_PATH = join(ROOT, "src", "template.html");
const CONTENT_PATH = join(ROOT, "content", "handbook.json");
const DIST = join(ROOT, "dist");
const WORKSPACE_PUBLIC = resolve(
  ROOT,
  "..",
  "workspace-handvantage-com",
  "public",
  "downloads"
);

const PUBLISHED_DATE = new Date().toISOString().slice(0, 10);
const VERSION = "1.0";

// ---------------------------------------------------------------- //
// PAGE BUILDERS — one function per page kind. Each returns HTML.    //
// ---------------------------------------------------------------- //

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function coverPage() {
  return `
<section class="page cover">
  <div class="brand">
    <span class="h-mark">H</span>
    <span class="name">Handvantage</span>
  </div>
  <span class="eyebrow">A REFERENCE FOR PROCUREMENT COMMITTEES</span>
  <h1>The Agentic AI<br>Procurement <span class="em">Handbook.</span></h1>
  <p class="subtitle">Sector dossiers, persona briefs, and the architectural reference for buying and deploying agentic AI in regulated enterprises.</p>
  <div class="footer">
    <div>workspace.handvantage.com</div>
    <div class="right">
      <div class="version">Version ${VERSION}</div>
      <div>Published ${PUBLISHED_DATE}</div>
    </div>
  </div>
</section>`;
}

function colophonPage() {
  return `
<section class="page colophon">
  <div class="page-content">
    <span class="label">ABOUT THIS HANDBOOK</span>
    <h2>A peer-to-peer reference, not a sales document.</h2>
    <p>This handbook compiles the editorial published at <strong>workspace.handvantage.com/insights</strong> into a single reference for procurement committees evaluating agentic AI for deployment in regulated environments. It is written for senior buyers — CISOs, CFOs, COOs, compliance officers, and the founders and boards they brief.</p>
    <p>The content is human-authored under the founder's byline. Every regulatory citation references published guidance — by article number, by clause number, by document number — so a reader who wants to verify any claim has the path to do so.</p>
    <p>The handbook is published openly. No email gate. No registration. Reference it, share it, attach it to your committee deck, cite it in your own writing. The credit and the link back to the source are appreciated; the use is not restricted.</p>
    <div class="meta">
      <strong>Published</strong>: ${PUBLISHED_DATE}<br>
      <strong>Version</strong>: ${VERSION}<br>
      <strong>Author</strong>: Josh Olayemi, Founder, Handvantage<br>
      <strong>Contact</strong>: hello@handvantage.com<br>
      <strong>Canonical URL</strong>: workspace.handvantage.com<br>
      <strong>Licence</strong>: Free to share, cite, and forward
    </div>
  </div>
</section>`;
}

function tocPage(parts) {
  const partRows = parts
    .map(
      (part) => `
    <div class="part">
      <div class="part-label">${escapeHtml(part.label)}</div>
      <div class="part-name">${escapeHtml(part.name)}</div>
      <ul>
        ${part.chapters
          .map(
            (ch) => `
        <li>
          <span class="num">${escapeHtml(ch.num)}</span>
          <span class="name">${escapeHtml(ch.title)}</span>
          <span class="page-num">${escapeHtml(ch.pageHint)}</span>
        </li>`
          )
          .join("")}
      </ul>
    </div>`
    )
    .join("");

  return `
<section class="page toc">
  <div class="page-content">
    <h2>Table of <span class="em">contents</span>.</h2>
    ${partRows}
  </div>
</section>`;
}

function chapterDividerPage(chapter) {
  return `
<section class="page chapter-divider">
  <span class="part-label">${escapeHtml(chapter.partLabel)}</span>
  <div class="ch-num">CHAPTER ${escapeHtml(chapter.num)}</div>
  <h1>${chapter.titleHtml}</h1>
  <p class="dek">${escapeHtml(chapter.dek)}</p>
</section>`;
}

function partDividerPage(part) {
  // Roman numeral derived from the part label string. Defensive: if the
  // label doesn't follow "PART X", use the label as-is.
  const roman = part.label.replace(/^PART\s+/i, "").trim();
  return `
<section class="page part-divider">
  <div class="marker">${escapeHtml(part.label)}</div>
  <div class="roman">${escapeHtml(roman)}</div>
  <div class="name">${escapeHtml(part.name)}.</div>
  ${part.summary ? `<div class="summary">${escapeHtml(part.summary)}</div>` : ""}
  <div class="footer-rule">
    <span>${escapeHtml(part.label)} · ${escapeHtml(part.name.toUpperCase())}</span>
    <span>${escapeHtml(String(part.chapters.length))} chapters</span>
  </div>
</section>`;
}

/**
 * Render a chapter's body across one or more body pages. Splits on
 * paragraph boundaries; each page holds roughly 5-7 paragraphs worth
 * of body, leaving room for pull-quotes and callouts. Pull-quotes are
 * inserted at section breakpoints if specified in the chapter spec.
 */
function chapterBodyPages(chapter) {
  // Chunk the body paragraphs into groups that fit on a page.
  // First page hosts the pull-quote AND callout (each takes ~2-3
  // paragraphs of vertical space), so it gets significantly fewer
  // paragraphs. Subsequent pages get a tighter density.
  // Tuned conservatively against the 8.5x11 page-content area
  // (~9.1 inches tall) — body text at 10.5pt with 1.55 line-height
  // averages 6 lines per paragraph. A chapter can override via
  // `paragraphsPerPage` for content with unusually short or long
  // paragraphs (glossaries pack many short entries; question banks
  // pack fewer long enumerations).
  const override = chapter.paragraphsPerPage;
  const FIRST_PAGE_PARAS = override ?? (chapter.pullQuote && chapter.callout ? 2 : chapter.pullQuote || chapter.callout ? 3 : 4);
  const SUBSEQUENT_PARAS = override ?? 4;

  const groups = [];
  let current = [];
  for (let i = 0; i < chapter.body.length; i++) {
    const target = groups.length === 0 ? FIRST_PAGE_PARAS : SUBSEQUENT_PARAS;
    current.push(chapter.body[i]);
    if (current.length >= target) {
      groups.push(current);
      current = [];
    }
  }
  if (current.length) groups.push(current);

  return groups
    .map((group, pageIdx) => {
      // Pull-quote and callout both anchor on the first body page.
      const pullQuote =
        pageIdx === 0 && chapter.pullQuote
          ? `<figure class="pull-quote">${escapeHtml(chapter.pullQuote.text)}<span class="attribution">— ${escapeHtml(chapter.pullQuote.attribution)}</span></figure>`
          : "";

      const callout =
        pageIdx === 0 && chapter.callout
          ? `<aside class="callout">
              <div class="label">${escapeHtml(chapter.callout.label)}</div>
              <div class="stat">${escapeHtml(chapter.callout.stat)}</div>
              <div class="gloss">${escapeHtml(chapter.callout.gloss)}</div>
            </aside>`
          : "";

      const paras = group.map((p) => `<p>${p}</p>`).join("\n");

      return `
<section class="page body-page">
  <div class="running-header">
    <span>${escapeHtml(chapter.partLabel)}</span>
    <span>Ch. ${escapeHtml(chapter.num)} · ${escapeHtml(chapter.runningHeaderTitle)}</span>
  </div>
  <div class="page-content">
    <div class="body-content">
      ${paras}
      ${pullQuote}
      ${callout}
    </div>
  </div>
  <div class="running-footer">
    <span>The Agentic AI Procurement Handbook · ${VERSION}</span>
    <span>workspace.handvantage.com</span>
  </div>
</section>`;
    })
    .join("\n");
}

// ---------------------------------------------------------------- //
// MAIN                                                              //
// ---------------------------------------------------------------- //

async function main() {
  console.log("→ Reading template + content...");
  const template = readFileSync(TEMPLATE_PATH, "utf8");
  const content = JSON.parse(readFileSync(CONTENT_PATH, "utf8"));

  console.log("→ Building pages...");
  const pages = [];
  pages.push(coverPage());
  pages.push(colophonPage());
  pages.push(tocPage(content.parts));

  // Iterate parts → chapters. Each part gets a divider page before its
  // first content-bearing chapter. Stub chapters (no body) are skipped
  // entirely AND don't trigger their part's divider — keeps the
  // proof-PDF clean while we pour content over multiple sessions.
  for (const part of content.parts) {
    const contentChapters = part.chapters.filter(
      (ch) => ch.body && ch.body.length > 0
    );
    if (contentChapters.length === 0) continue;
    pages.push(partDividerPage(part));
    for (const chapter of contentChapters) {
      const fullChapter = {
        ...chapter,
        partLabel: part.label,
        runningHeaderTitle: chapter.title.split(":")[0].trim(),
      };
      pages.push(chapterDividerPage(fullChapter));
      pages.push(chapterBodyPages(fullChapter));
    }
  }

  const html = template
    .replace("{{CONTENT}}", "")
    .replace("{{PAGES}}", pages.join("\n"));

  // Save the rendered HTML for debugging
  if (!existsSync(DIST)) mkdirSync(DIST, { recursive: true });
  writeFileSync(join(DIST, "handbook.html"), html);
  console.log(`  Wrote ${join(DIST, "handbook.html")} (${html.length} chars)`);

  console.log("→ Launching headless Chrome...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    // Allow webfonts to settle
    await page.evaluateHandle("document.fonts.ready");

    console.log("→ Rendering PDF...");
    const pdfPath = join(DIST, "handbook.pdf");
    await page.pdf({
      path: pdfPath,
      format: "letter",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });

    const stats = (await import("node:fs")).statSync(pdfPath);
    console.log(`  Wrote ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);

    // Mirror to the workspace site's public/downloads
    if (!existsSync(WORKSPACE_PUBLIC)) {
      mkdirSync(WORKSPACE_PUBLIC, { recursive: true });
    }
    const livePdfPath = join(WORKSPACE_PUBLIC, "agentic-ai-procurement-handbook.pdf");
    copyFileSync(pdfPath, livePdfPath);
    console.log(`  Mirrored to ${livePdfPath}`);
  } finally {
    await browser.close();
  }

  console.log("✓ Done.");
}

main().catch((err) => {
  console.error("✗ Build failed:", err);
  process.exit(1);
});
