import puppeteer from "puppeteer";
import { readFileSync } from "node:fs";

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 850, height: 1100, deviceScaleFactor: 1.5 });
const html = readFileSync("/Users/olayemioyeniyi/Documents/GitHub/Handvantage-Website-Development-Project-2634/handbook/dist/handbook.html", "utf8");
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");

const pageCount = await page.evaluate(() => document.querySelectorAll(".page").length);
console.log(`Pages: ${pageCount}`);

for (let i = 0; i < Math.min(pageCount, 8); i++) {
  const el = await page.evaluateHandle((idx) => document.querySelectorAll(".page")[idx], i);
  await el.screenshot({ path: `/tmp/handbook-preview/page-${String(i + 1).padStart(2, "0")}.png` });
  console.log(`  page ${i + 1} captured`);
}

await browser.close();
