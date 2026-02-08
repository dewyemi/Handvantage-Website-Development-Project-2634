# Handvantage Website Master Spec v6: The Cinematic Edition
**Target Audience:** Senior Frontend Engineer / AI Developer.
**Goal:** Build the "Billion-Dollar" Digital Command Center.
**Aesthetic:** High-Frequency Trading Terminal meets Cyberpunk Editorial.

---

## 1. The Design System (Cinematic Upgrade)

### **Core Palette (The "Void" Theme)**
*   **Background:** `#050505` (Void Black) - *Darker than standard dark mode.*
*   **Surface:** `#0A0A0A` (Obsidian) - *For cards and panels.*
*   **Primary (Security):** `#00FF94` (Terminal Green) - *High voltage, neon.*
*   **Secondary (Agents):** `#3B82F6` (Electric Blue) - *Clean, intelligent.*
*   **Text:** `#EDEDED` (Titanium White) - *High contrast.*

### **Typography (The "Editorial" Stack)**
*   **Headlines:** `Space Grotesk` (Bold, Tight Tracking).
    *   *Usage:* Huge hero text, section headers. `tracking-tighter`, `leading-none`.
*   **Body:** `Inter` (Clean, Readable).
    *   *Usage:* Long-form content.
*   **Data/UI:** `JetBrains Mono` (Technical).
    *   *Usage:* Pricing, stats, "Agent Status" indicators. `uppercase`, `tracking-widest`.

### **Visual Effects (The "Glass & Grid")**
*   **Borders:** 1px solid `#FFFFFF` at `5%` opacity. *Razor sharp.*
*   **Glows:** Radial gradients behind key elements. `bg-green-500/20 blur-[100px]`.
*   **Noise:** Subtle grain overlay on the background to add texture.

---

## 2. Page Structure & Copy Injection

### **Page 1: HOME (The Command Center)**
**Hero Section:**
*   **Layout:** Split Screen (Cinematic).
*   **Left (The Pilot):** "Secure The Fortress." (Green Glow).
*   **Right (The Fleet):** "Deploy The Fleet." (Blue Glow).
*   **Center:** "The Dual DNA."
*   **Animation:** Text types out like a terminal. Background has slow-moving data streams.

**The "Agent Roster" Section (New):**
*   **Component:** Horizontal Scroll / Carousel of "Agent Cards."
*   **Card Design:** Looks like a character selection screen in a video game.
*   **Content:**
    *   *Card 1:* **The Hunter** (AI SDR). "I book meetings while you sleep."
    *   *Card 2:* **The Sentry** (AI Compliance). "I watch the logs so you don't have to."
    *   *Card 3:* **The Concierge** (AI Support). "I solve tickets in milliseconds."

### **Page 2: THE FLEET (Agentic AI)**
**Hero Section:**
*   **Headline:** "Hire an Army of 1,000 for the Price of One."
*   **Sub-Headline:** "Don't buy software. Hire Digital Employees."
*   **Visual:** A 3D visualization of a "swarm" of agents working together.

**The "Comparison" Table:**
*   **Component:** High-contrast data table (JetBrains Mono).
*   **Columns:** "Human Employee" vs. "Digital Agent."
*   **Rows:** Cost ($60k vs $500/mo), Speed (8h/day vs 24h/day), Errors (Human Error vs Zero).

### **Page 3: PRICING (The Fleet Model)**
**Component:** 3-Column Pricing Table (Glassmorphic).
*   **Tier 1: Co-Pilot ($4,500/mo).** "1 Agent Included."
*   **Tier 2: The Commander ($7,500/mo).** "3 Agents Included." (Highlighted with Green Glow).
*   **Tier 3: The Sovereign ($12,000/mo).** "Unlimited Agents."

---

## 3. Implementation Prompt (For Claude Code)

**Copy/Paste this into your AI Coder:**

> "Build a 'Cinematic' landing page using React, Tailwind 4, and Framer Motion.
> **Theme:** Void Black (#050505) background with subtle noise texture.
> **Typography:** Space Grotesk (Headlines), JetBrains Mono (UI/Data).
> **Layout:**
> 1.  **Hero:** Split screen. Left = Security (Green), Right = AI Agents (Blue). Use 'terminal typing' effects for text.
> 2.  **Agent Roster:** A horizontal scroll section showing 'Digital Employee' cards (Hunter, Sentry, Concierge). Use glassmorphism (backdrop-blur-xl, border-white/5).
> 3.  **Pricing:** 3-column grid. Highlight the middle tier with a neon green glow effect.
> **Vibe:** High-Frequency Trading Terminal. Sharp edges, no rounded corners, high contrast."
