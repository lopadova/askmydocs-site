# AskMyDocs — Marketing One-Pager · Design Brief

> Hand this brief to Claude Design. Goal: a **single-scroll, dark, premium,
> motion-rich landing page** for the AskMyDocs open-source product — in the
> spirit of [cmem.ai](https://cmem.ai),
> [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com), and
> [openclaw.ai](https://openclaw.ai). Fully static, no backend.

---

## 1. The product in one breath

**AskMyDocs** is a self-hostable **AI hub for enterprise knowledge**: hybrid RAG
(pgvector + full-text + reranker) over a **typed canonical knowledge graph** with
human-gated promotion, a streaming chat surface, agentic MCP tools, and a full
admin cockpit — all on a Laravel + PostgreSQL stack. **MIT-licensed,
self-hostable, no per-seat lock-in.** The open-source alternative to Glean /
Notion AI / ChatGPT Enterprise.

**Positioning line (hero candidate):**
> *Your enterprise knowledge, with a memory.*
Alternates:
> *Ask your docs. Get grounded answers. Own the whole stack.*
> *RAG that remembers what your team decided — and what it rejected.*

**One-sentence sub-hero:**
> Hybrid retrieval over a typed knowledge graph, a self-compiling wiki behind an
> anti-hallucination firewall, agentic tools, and a full admin cockpit —
> self-hosted, MIT, EU-sovereign-feasible.

## 2. Audience & tone

- **Audience**: senior engineers, platform/AI leads, CTOs of regulated/enterprise
  orgs; open-source-savvy; allergic to vendor lock-in.
- **Tone**: confident, technical, a little bold; "built by engineers for
  engineers". Not salesy/fluffy. Think developer-tool landing pages (Linear,
  Vercel, Resend, Nous Research) — precise copy, generous whitespace, motion that
  rewards scrolling.

## 3. Visual direction

- **Dark-first** (near-black background, e.g. `#0a0a0f` / `#0b0c10`), with a deep
  indigo/violet accent system. Primary accent **`#6366f1`** (indigo), secondary
  **`#818cf8`** / **`#a855f7`** (violet) for gradients and glows.
- **Aurora / gradient mesh** hero background with subtle animated motion
  (slow-drifting blurred blobs or a faint grid/constellation). Glassy cards with
  thin 1px borders (`rgba(255,255,255,.08)`) and soft inner glow.
- **Motion**: scroll-reveal (fade-up + slight translate) on each section; a
  living hero (animated gradient, or a typewriter on the rotating taglines, or a
  subtle particle/graph animation tying into the "knowledge graph" theme). Keep it
  tasteful and 60fps; respect `prefers-reduced-motion`.
- **Typography**: a crisp geometric/grotesk sans for headings (e.g. Inter / Geist
  / Satoshi), a monospace for code + accent labels (e.g. Geist Mono / JetBrains
  Mono). Big confident H1, tight tracking.
- **Signature motif**: the **knowledge graph** — nodes + edges. Use it as a
  recurring visual (hero backdrop, section dividers, the "institutional memory"
  block). The logo mark is an "A" glyph (see `/public` once scaffolded).

## 4. Page structure (single scroll, top → bottom)

1. **Top nav** (sticky, translucent on scroll): wordmark left; right: `Docs`,
   `GitHub` (star count optional, static), `Get Started` button. Mobile: hamburger.

2. **Hero**: animated gradient/graph backdrop. H1 tagline (consider rotating
   through the candidates), sub-hero line, **dual CTA** — primary `Read the docs`
   (→ docs site) + secondary `Star on GitHub`. A small trust row of tech badges
   (Laravel · PostgreSQL+pgvector · MCP · MIT). Optional: a faint terminal/UI
   screenshot or an animated chat-with-citations mock.

3. **"What it is" strip**: 2–3 sentences + 3–4 stat/feature chips
   (e.g. *Hybrid RAG*, *Typed knowledge graph*, *Self-compiling wiki*,
   *Agentic MCP tools*).

4. **The 6 moats** (the centerpiece — a grid of 6 feature cards, each with an
   icon, title, 1–2 line description, subtle hover glow):
   - **Human-gated canonical promotion** — the LLM drafts; only humans commit
     canonical storage. Immutable editorial audit trail.
   - **Institutional memory + anti-repetition** — a retrieval-time knowledge
     graph + a ⚠ firewall that stops the LLM re-proposing rejected approaches.
   - **Self-compiling Auto-Wiki** — a machine-built knowledge tier that maintains
     itself, quarantined behind a human > auto > raw firewall.
   - **Field-level PII redaction** — GDPR-grade redaction at every persistence
     boundary, granular and default-off.
   - **MIT · self-hostable · on-prem** — runs on your infra; zero vendor lock-in.
   - **Eval-harness CI gate** — RAG regression gate on every PR + nightly
     LLM-as-judge + adversarial cohorts.

5. **Showcase band — "A KB with a memory"** (the differentiator, more visual):
   animate the knowledge-graph idea + the anti-repetition ⚠ concept. Short copy:
   the KB remembers decisions, walks the graph at query time, and refuses to
   re-suggest what you already ruled out. Pair with the Auto-Wiki self-maintenance
   loop (ingest → enrich → graph → concept synthesis → daily maintenance).

6. **Connectors row**: "Plug into your stack" — logo chips for Google Drive,
   Notion, OneDrive, Evernote, Confluence, Jira, Microsoft Fabric. One line: every
   source chunked + cited per its native shape.

7. **Agentic / MCP band**: AskMyDocs exposes its knowledge as **MCP tools** for
   Claude Desktop / Cursor / Claude Code, and ships **KITT**, a one-`<script>`
   embeddable page-aware agent. Short copy + a small code snippet
   (`@modelcontextprotocol` connect, or the KITT embed tag).

8. **Architecture band**: a clean diagram (client → retrieval → graph → AI
   provider; ingestion fan-in). Can be a stylized static SVG. One line: "Two
   ingestion entry points, one execution path. The DB is a projection of
   canonical markdown."

9. **Open-source / trust band**: MIT badge, "self-hostable, EU-sovereign-feasible,
   no $500K/yr contract", a compact comparison vs Glean / Notion AI / ChatGPT
   Enterprise (self-hostable ✓, typed canonical layer ✓, anti-repetition ✓).

10. **Final CTA**: big centered "Own your knowledge stack." → `Read the docs` +
    `Star on GitHub` + `composer create / git clone` one-liner.

11. **Footer**: links (Docs, GitHub, Sister packages, License), a line about
    Padosoft, copyright. Minimal.

## 5. Content/links (use these exact targets)

- **Docs**: `https://padosoft.mintlify.app`
- **GitHub**: `https://github.com/lopadova/AskMyDocs`
- **Sister packages** (optional footer): the `padosoft/*` ecosystem on GitHub.
- Quick-install one-liner: `git clone https://github.com/lopadova/AskMyDocs.git`

## 6. Hard constraints (technical)

- **Stack the template must target**: **React 19 + Vite (latest) + TypeScript**,
  styled with **Tailwind CSS**. Output is a **fully static** SPA (no SSR, no
  backend, no runtime data fetching) — it will be served by a Cloudflare Worker
  via static assets.
- **Deliverable from Claude Design**: React components (TSX) + Tailwind, ideally a
  single `App` composed of section components (`Hero`, `Moats`, `Showcase`,
  `Connectors`, `Mcp`, `Architecture`, `OpenSource`, `Footer`). Inline SVGs for
  icons/graph motif preferred (no heavy icon deps); `lucide-react` is acceptable.
- **Performance**: fast LCP, no layout shift, lazy-load any heavy visual, total JS
  modest. Animations via CSS / lightweight (Framer Motion acceptable if tree-shaken).
- **Accessibility**: WCAG AA contrast, semantic landmarks, keyboard-reachable nav +
  CTAs, visible focus, `prefers-reduced-motion` honored, alt text on imagery.
- **Responsive**: mobile-first; the 6-moat grid collapses 3→2→1; sticky nav → mobile menu.
- **No tracking that needs a backend** (a privacy-friendly static analytics snippet
  is fine, but optional).

## 7. Assets

- Logo mark: an indigo rounded-square "A" glyph (matches the docs favicon at
  `AskMyDocs/docs-site/favicon.svg`). Claude Design may refine it.
- Product screenshots exist in the main repo (`resources/screenshots/`) — chat UI,
  dashboard, KITT — usable as framed mockups if desired.
- Palette tokens: bg `#0a0a0f`, surface `#13131a`, border `rgba(255,255,255,.08)`,
  primary `#6366f1`, violet `#a855f7`, text `#e5e7eb`, muted `#9ca3af`.

## 8. What success looks like

A page that, in the first 3 seconds, makes a senior engineer think *"this is a
serious, beautiful, open-source product"* — then rewards scrolling with the six
moats and the "KB with a memory" story, and ends with a clear path to the docs and
GitHub. Premium, dark, kinetic, technical — never a generic SaaS template.

---

*Once Claude Design returns the template, hand it back: it drops onto the
React 19 + Vite + Tailwind scaffold in this repo (`lopadova/askmydocs-site`) and
deploys to Cloudflare Workers static assets at `askmydocs.padosoft.com`.*
