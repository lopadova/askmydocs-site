# AskMyDocs — Marketing Landing Page

Static marketing site for [AskMyDocs](https://github.com/lopadova/AskMyDocs) — a self-hostable AI hub for enterprise knowledge.

Built with **React 19 + Vite + TypeScript + Tailwind CSS v3**, served via **Cloudflare Workers static assets**.

## Stack

- React 19, Vite 6, TypeScript strict
- Tailwind CSS v3 (with Padosoft design-system tokens extracted into the config)
- Bun (preferred) or npm
- Deploy target: Cloudflare Worker static assets (`wrangler.jsonc`)

## Local development

```bash
bun install       # or: npm install
bun run dev       # or: npm run dev  → http://localhost:5173
```

## Build

```bash
bun run build     # or: npm run build  → produces ./dist/
```

Build output: `./dist/index.html` + hashed assets. The Vite build must exit 0 before shipping.

## Preview built output

```bash
bun run preview   # → http://localhost:4173
```

Or with Wrangler:

```bash
bunx wrangler dev --local   # → http://localhost:8787
```

## Deploy to Cloudflare Workers

> Requires Cloudflare credentials (`CLOUDFLARE_API_TOKEN`) and a configured account.

```bash
bun run deploy    # wraps: wrangler deploy
```

The `wrangler.jsonc` targets the `askmydocs-site` Worker on the Padosoft account. Set `cf-account-id` or pass `--account-id` as needed.

## Design tokens

Extracted from the Padosoft Design System:

| Token group    | Key values                                   |
|----------------|----------------------------------------------|
| Backgrounds    | `#07090f` base, `#0b0e16` surface, `#11151f` raised |
| Primary accent | `#2ff5d6` cyan-500 (neon cyan)               |
| Depth accent   | `#2e9bff` blue-500 (electric blue)           |
| Rare accent    | `#7b6cff` violet-500 (agent violet)          |
| Text           | `#eaf6f4` hi, `#a3b4bb` mid, `#65787f` low  |
| Fonts          | Space Grotesk (display), Inter (body), JetBrains Mono (code) |
| Borders        | `rgba(120,200,220,0.12)` line-1              |

## Content sources

- Product facts: `AskMyDocs/README.md` (the `lopadova/AskMyDocs` repo)
- Links: docs → `https://doc.askmydocs.padosoft.com`, GitHub → `https://github.com/lopadova/AskMyDocs`

## License

MIT — see [LICENSE](./LICENSE).
