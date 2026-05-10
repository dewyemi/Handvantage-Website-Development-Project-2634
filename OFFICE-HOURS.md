# Office Hours — planning doc

**Working name**: *Handvantage Office Hours* (alternative: *The Audit Window*, *Vantage Sessions*).
**Status**: planning. First session target — June 2026 (after the second Vantage Pilot newsletter ships, so we have an audience signal).
**Format**: pre-recorded Q&A, ~25–35 min, monthly cadence. Posted to YouTube + LinkedIn + the workspace site, embedded under a new `/office-hours` route.

This doc is the planning canon — what the format is, what each session covers, the production workflow, and the six-month topic outline. Lives at the repo root alongside `EDITORIAL.md` and `DESIGN.md`.

---

## 1. Why this exists (the strategic case)

The editorial archive serves the asynchronous reader — the CISO who reads `/architecture` at 11pm, the CFO who skims a sector dossier on a flight. Office Hours serves a different mode: the buyer who wants to *hear* a real person work through the questions they're actually asking, in the cadence and grain a written article can't match.

Three reads on what this format does:

1. **For the buyer**: a senior person sitting at their desk in their actual job hears Josh respond to questions a peer would ask. It's 25 minutes of "is this person credible?" answered through tone, hesitation, qualified claims, and willingness to say "I don't know." Articles don't carry that.

2. **For SEO/AEO**: each session generates a YouTube transcript, a LinkedIn post, a session page on the site with the embed and a written summary. Multiple surfaces, multiple ways for search and AI engines to find the content. Video content also ranks differently from text and reaches a different audience (LinkedIn video has very different demographics than the workspace site organic).

3. **For the team**: a recurring format that can become a presentation deck, a conference talk, a sales call asset. Once the format is proven, every session becomes content for three or four downstream channels with minimal extra production.

---

## 2. The format

### Length
**25–35 minutes.** Long enough to actually work through three or four questions; short enough to watch in one sitting at lunch. Industry data: video drop-off accelerates after 8 minutes for educational content; the 25–35 min range is the right tradeoff for senior-buyer audience.

### Structure
Each session has the same four-segment structure so the audience knows what to expect:

```
00:00–02:00   Opening — what we're covering today, why now
02:00–10:00   Question 1 — the regulatory or governance question of the month
10:00–18:00   Question 2 — a sector-specific question (rotates)
18:00–26:00   Question 3 — a "what we got wrong" or retrospective question
26:00–30:00   Closing — what's coming next month, where to read more
```

### Production model

**Pre-recorded, edited, posted.** Not live. Reasons:
- Live requires audience-building first (which we're starting from zero on)
- Live forces calendar coordination across timezones — kills international reach
- Pre-recorded lets us re-take, edit out the verbal stumbles, polish the closing
- Pre-recorded lets us release on a predictable cadence (the last business day of each month, paired with the Vantage Pilot newsletter)

**Equipment baseline** (lowest defensible bar, not aspirational):
- Camera: any modern phone camera (iPhone 13+ is fine) on a tripod, framed shoulders-up
- Audio: a USB lavalier mic (~$80 — Audio-Technica ATR3350 or similar). Audio matters more than video. Tinny audio kills perceived authority.
- Lighting: window light, sit facing the window. Don't sit with the window behind you.
- Background: clean wall, bookshelf, or the workspace itself. No corporate chroma-key.
- Editing: DaVinci Resolve (free) or CapCut (free, faster). Cut filler words, jump cuts only at natural pauses, light colour grade.

**Process** (each session, ~3 hours total):
1. **Plan** (30 min): pick the three questions, draft talking points (NOT a script — talking points only, otherwise it sounds read)
2. **Record** (45 min): one camera, one mic, three takes max per question
3. **Edit** (60 min): cut down to 25–35 min, add intro/outro frame, soft music if needed (silence usually better)
4. **Publish** (30 min): upload to YouTube, generate transcript (Whisper or YouTube auto-caption), draft LinkedIn post, ship session page
5. **Distribute** (15 min): post on LinkedIn, email to subscribers (when subscriber list exists), tweet thread

If session 1 takes 6 hours instead of 3, that's normal. Sessions 4 onwards should land in 3 hours as the workflow tightens.

### Source of questions

Three sources, ranked by authenticity:

1. **Real questions from sales calls** — the highest-signal source. Capture the question Josh actually got asked this week from a prospect. Strip identifying details. This is the gold standard.
2. **Reader questions** (when there's an audience) — solicit via the newsletter, the LinkedIn comments, the contact form ("we read these and may answer one publicly").
3. **Editorially-generated questions** — questions Josh + the team think are worth answering even though no one's asked yet. Useful when the regulatory calendar requires a topic before the audience is asking.

---

## 3. The site presence

A new route at `/office-hours` on the workspace site:

**Index page** (`/office-hours`):
- Hero: explains the format, when sessions ship, where to watch
- Latest session featured prominently (video embed + 1-paragraph summary)
- Archive of all sessions below (chronological, most recent first)
- Subscribe affordance (newsletter + YouTube)

**Session page** (`/office-hours/[slug]`):
- Video embed at the top
- Date, length, topics covered
- Full written summary (2–3 paragraphs) — not a transcript, an editorial summary that stands alone
- Timestamps for each question (jump links into the video)
- Links to relevant articles and pages
- Schema.org `VideoObject` JSON-LD for SEO

I'll build the route scaffolding once you've recorded the first session. Until then, no point shipping a placeholder page that says "coming soon" — that reads weak.

---

## 4. Six-month topic outline

Each session below includes the three questions, the rotating sector, and the linked articles where the topic is covered in writing. The structure is roughly: [regulatory/governance question] + [sector-specific question, rotating] + [retrospective / "what we got wrong"].

### Session 01 — June 2026
- **Q1**: *"The EU AI Act high-risk obligations begin August 2. What should I have done by July 1?"* (links to: EU AI Act deadline briefing, Annex IV briefing)
- **Q2 (sector: financial services)**: *"My sponsor bank is asking about my AI governance posture. What do they actually want to see?"* (links to: financial services dossier)
- **Q3 (retro)**: *"You changed the deploy claim from 10 minutes to an hour. Why?"* (links to: design baseline §5)

### Session 02 — July 2026
- **Q1**: *"ISO 42001 surveillance audits start landing this fall. What's the audit programme actually asking for in 2026?"* (links to: ISO 42001 audit checklist)
- **Q2 (sector: healthcare)**: *"Where's the line between an AI tool that's HIPAA-compliant and one that needs FDA clearance?"* (links to: healthcare dossier)
- **Q3 (retro)**: *"You ripped out configurable defence layers. What was wrong with the configurable version?"* (links to: configurable-defence-layers retro, when published)

### Session 03 — August 2026
- **Q1**: *"NIST AI RMF Govern function — which controls do platforms systematically skip, and how do I tell?"* (links to: NIST AI RMF Govern briefing, when published)
- **Q2 (sector: fintech)**: *"OCC examiners are asking about model risk management for our AI vendor. What's the right answer?"* (links to: fintech dossier)
- **Q3 (retro)**: *"Why do you ship Keycloak with the platform when most enterprises already have an identity provider?"* (links to: vendor consolidation field note)

### Session 04 — September 2026
- **Q1**: *"AIDA (Canada's AI and Data Act) is moving through Parliament. What changes for me before enactment?"* (links to: AIDA briefing, when published)
- **Q2 (sector: Canadian public sector)**: *"My department is preparing an Algorithmic Impact Assessment. How do I structure it?"* (links to: Canadian public sector dossier)
- **Q3 (retro)**: *"Why did you reject the multi-tenant SaaS model when single-tenant is operationally heavier?"* (links to: SaaS-to-single-tenant retro, when published)

### Session 05 — October 2026
- **Q1**: *"OWASP Top 10 for Agentic Applications — how do I read it as a security architect, not as a checklist?"* (links to: OWASP reading-guide briefing, when published)
- **Q2 (sector: legal services)**: *"ABA Formal Opinion 512 says we have to 'reasonably understand' AI tools. What does that mean operationally?"* (links to: legal services dossier)
- **Q3 (retro)**: *"What changed about the Pilot + Fleet model after your first three customer deployments?"* (links to: Pilot + Fleet runtime retro, when published)

### Session 06 — November 2026
- **Q1**: *"The post-mortem question: what's the most painful AI compliance failure you've watched a customer prevent this year?"* (open-ended, depends on the year)
- **Q2 (sector: rotating — pick the sector with the most current procurement activity)**: TBD based on Q3 sales-call patterns
- **Q3 (retro)**: *"Looking back at the May 2026 launch, what would you do differently if you started over?"* (the year-end reflection)

---

## 5. Distribution

Each session ships on:
- **YouTube** — the canonical video. Channel: TBD (need to create + verify). Title format: *"Office Hours [number]: [Q1 short title]"*. Description includes timestamps + links to related articles.
- **LinkedIn** — a short native-video clip (90 sec extract) + post linking to YouTube + the session page on the workspace site
- **Workspace site** — `/office-hours/[slug]`, embedded video, written summary, timestamps
- **The Vantage Pilot newsletter** — featured in the issue that ships the same week
- **RSS feed for video** (`/office-hours/rss.xml`) — same pattern as the insights RSS

Optional, only if there's audience demand:
- **Spotify / Apple Podcasts** — audio-only version, distributed via a podcast hosting service like Transistor or Buzzsprout. Don't bother for the first 3 sessions; revisit if the YouTube watch-time is signalling "people prefer audio in this format."

---

## 6. Conference / event use

Once five sessions are in the can, we have a substantial body of recorded content that can be repurposed for:
- **Conference talks** — Josh presenting an extended version of one of the Q&A topics, with the office-hours session as the anchor reference
- **Webinar partnerships** — co-hosting with a regulatory advisory firm, a Big-4 alumnus group, or a sector-specific community
- **Vendor-event presence** — an "ask the founder" track at events like RSA, Black Hat, ISACA conferences, or sector-specific events

Pre-recorded sessions also de-risk the live presentation: the recorded answer is the canonical version, the live talk can build on it without reinventing.

---

## 7. Metrics worth tracking

Don't optimise for these — they're checkpoints, not goals. Same discipline as the editorial archive metrics in EDITORIAL.md §9.

- **Sessions published per month** (target: 1)
- **Average watch time / completion rate** (industry benchmark for educational video: 50–60% for well-targeted senior-buyer content)
- **YouTube subscribers** (directional only — not a quality metric on its own)
- **LinkedIn engagement on session-day post** (the senior-buyer audience tends to comment more than they like)
- **Session-page traffic from YouTube referrer** (the "people watched the video, then came to the site" signal)
- **Sales conversations that reference an Office Hours session** — highest-signal metric, same as for articles

---

## 8. The not-list (what Office Hours does NOT do)

- **No live broadcasts** in the first six months. Pre-recorded only.
- **No talking-head outsourcing.** Josh is the host. If Josh isn't available for a session, we skip the month rather than substitute. The format is "founder talking to a peer," not "company spokesperson reads from a deck."
- **No sponsored segments.** Not even subtle ones.
- **No "demo of the product" videos under the Office Hours brand.** Product demos are a different thing; if we want to make demo videos, they live under a separate `/demos` route.
- **No clickbait titles.** "5 SHOCKING things about the EU AI Act" — never. Title format stays editorial.
- **No paid promotion.** Organic only. If we ever need paid distribution, it goes through a real campaign with explicit measurement, not blended into the Office Hours channel.
- **No fake spontaneity.** It's pre-recorded. It's edited. We don't pretend otherwise — the description on each video says "Pre-recorded Office Hours session, edited for length."

---

## 9. Open decisions for Josh

Before recording session 01:

1. **YouTube channel name** — "Handvantage" or "Vantage Workspace" or "Josh Olayemi" (founder-named channels often outperform company-named for this kind of content)
2. **Series name** — *Handvantage Office Hours* (proposed) or alternative
3. **Recording cadence target** — last business day of the month (proposed, aligned with newsletter)
4. **First session date** — June 26, 2026 (last business day, paired with newsletter Issue 02)
5. **Equipment** — confirm phone-camera + USB lav mic baseline is acceptable, or shop for a real camera (Sony ZV-E10 or similar in the $700 range if you want a dedicated kit)

When ready, ping me and I'll build the `/office-hours` route + session-page template + RSS feed + schema markup.
