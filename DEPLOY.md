# Maharaji Kitchen — Cloudflare Workers Deploy Guide

## Prerequisites

1. **Cloudflare Account** — [dash.cloudflare.com](https://dash.cloudflare.com) pe login karein
2. **Wrangler CLI** — Already installed (`wrangler` package in devDependencies)
3. **Authentication** — Pehli baar deploy karne se pehle login karein:
   ```bash
   bunx wrangler login
   ```

---

## 1. Build Command (Production)

```bash
bun run build
```

**Output location:**
- Worker entry: `dist/server/index.mjs`
- Static assets: `dist/client/`
- Wrangler config: `dist/server/wrangler.json`

**Behind the scenes:**
- Vite client bundle build karta hai
- SSR bundle build hota hai
- Nitro Cloudflare Module preset ke saath bundle karta hai
- Auto-generated `wrangler.json` mein assets binding included hoti hai

---

## 2. Deploy Command (Production)

### Option A — Root se deploy (recommended)
```bash
bun run deploy
```
Ya manually:
```bash
bun run build && wrangler deploy
```

### Option B — Direct dist/server se deploy
```bash
bun run build && cd dist/server && wrangler deploy
```

**Production URL format:**
```
https://maharaji-kitchen.your-subdomain.workers.dev
```

---

## 3. Non-Production / Branch Deploy Commands

### Staging Deploy
```bash
bun run deploy:staging
```
Ya manually:
```bash
bun run build && wrangler deploy --env staging
```

**Staging URL:**
```
https://maharaji-kitchen-staging.your-subdomain.workers.dev
```

### Preview / Dev Branch Deploy
```bash
bun run deploy:preview
```
Ya manually:
```bash
bun run build && wrangler deploy --env preview
```

**Preview URL:**
```
https://maharaji-kitchen-preview.your-subdomain.workers.dev
```

---

## 4. Local Preview (Production Build Test)

```bash
bun run build
bunx wrangler dev dist/server/index.mjs
```

Ya shortcut:
```bash
bun run wrangler:dev
```

---

## 5. Environment Variables Setup (Cloudflare Dashboard)

Cloudflare Dashboard → Workers & Pages → maharaji-kitchen → Settings → Variables mein add karein:

### Required Variables:
| Variable Name | Description | Example |
|--------------|-------------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL | `https://xyz.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon key | `eyJ...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side only | `eyJ...` |

**Important:**
- Browser/client env vars (`VITE_*`) ko TanStack Start automatically inject karta hai
- Server-only vars (`SUPABASE_SERVICE_ROLE_KEY`) ko `.handler()` ke andar `process.env` se access karein
- Secrets ko Cloudflare dashboard ke "Variables" section mein add karein, code mein nahi

---

## 6. Custom Domain Attach Karna (Optional)

1. Cloudflare Dashboard → Workers → maharaji-kitchen → Triggers → Custom Domains
2. Apna domain add karein (e.g., `maharajikitchen.com`)
3. DNS records automatically configure ho jayenge

---

## 7. Troubleshooting

### Error: "No such module"
```bash
# Solution: Clean build
rm -rf dist node_modules/.nitro
bun run build
```

### Error: "Wrangler config main is overridden"
- Ye warning normal hai — Nitro apna wrangler.json generate karta hai
- Deploy successfully hota hai

### Error: "Unauthorized"
```bash
# Solution: Re-authenticate
bunx wrangler login
```

### Build fail ho raha hai?
```bash
# Full clean rebuild
rm -rf dist node_modules/.cache .wrangler
cd dist/server && wrangler deploy
```

---

## 8. Quick Reference Commands

| Task | Command |
|------|---------|
| Dev server | `bun run dev` |
| Production build | `bun run build` |
| Production deploy | `bun run deploy` |
| Staging deploy | `bun run deploy:staging` |
| Preview deploy | `bun run deploy:preview` |
| Local preview | `bun run wrangler:dev` |
| Wrangler login | `bunx wrangler login` |
| Wrangler logs | `bunx wrangler tail` |

---

## 9. Architecture Notes

- **Framework:** TanStack Start v1 + React 19
- **Build Tool:** Vite 8 + Nitro (Cloudflare Module preset)
- **SSR Entry:** `src/server.ts`
- **Worker Output:** `dist/server/index.mjs`
- **Static Assets:** `dist/client/` (auto-bound via ASSETS binding)
- **Node.js compat:** Enabled via `nodejs_compat` flag

Agar koi aur help chahiye toh batayein! 🚀
