# AGENTS.md

## Project Overview

Rob's Style Guide is a shared design system replicated across multiple implementation frameworks. The same visual theme, tokens, and components appear identically in each system. New frameworks can be added over time — every feature gets a page in every system.

### Systems

| System | Source | Build Output | Description |
| --- | --- | --- | --- |
| **Vanilla** | `docs/index.html`, `docs/prism/index.html` | — | HTML/CSS/JS, zero dependencies. **Source of truth for theme.** |
| **Svelte** | `svelte/` | `docs/svelte/`, `docs/svelte-prism/` | Svelte 5 (runes), Vite 8 |

### Feature Pages

Each feature is implemented in every system. Pages are paired by feature:

| Feature | Vanilla | Svelte |
| --- | --- | --- |
| Style guide | `docs/index.html` | `docs/svelte/` |
| Code highlighting | `docs/prism/index.html` | `docs/svelte-prism/` |

When adding a new feature, create a corresponding page in each system so the visual output matches across all implementations.

## Development Commands

```bash
# Local preview (nginx on localhost:9500)
make serve
make stop

# Svelte dev server
cd svelte && npm run dev

# Build for production
cd svelte && npm run build       # Svelte app -> docs/svelte/
cd svelte && npm run build:prism  # Prism page -> docs/svelte-prism/
cd svelte && npm run build:all    # Both
```

## Tech Stack

- **Vanilla:** HTML/CSS/JS, zero dependencies
- **Svelte:** Svelte 5 (runes), Vite 8, Prism.js (CDN)
- **Fonts:** Source Serif 4, Source Code Pro (self-hosted)
- **CI/CD:** GitHub Actions (`deploy.yml`) — push to `main` triggers build and deploy

## Design Tokens

- **Primary:** `#bc0081` (pink)
- **Secondary:** `#6020c0` (purple)
- **Accent:** `#005cb5` (cyan)
- **Success:** `#50c878` (green)
- **Warning:** `#ffbe32` (amber)
- **Error:** `#ee343b` (red)

Both implementations share the same palette. Vanilla HTML (`docs/index.html`) is the canonical reference for styling.

## Conventions

- Vanilla HTML stays dependency-free — no build tools, no frameworks
- Svelte implementation is independent — use Svelte 5 best practices (runes, async components)
- Dual-mode (dark/light) support across all pages
- Self-host fonts; avoid Google Fonts CDN
- Use `snip` prefix for all shell commands to compress output
- Prefer existing tools and libraries over custom implementations

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`:
1. Checks out code, sets up Node 24
2. Runs `npm ci` + `npx vite build` in `svelte/`
3. Uploads entire `docs/` directory as Pages artifact
4. Deploys via `actions/deploy-pages`

## File Structure Notes

- `svelte/vite.config.js` — main Svelte build (outputs to `docs/svelte/`)
- `svelte/vite.prism.config.js` — Prism build with `prism.index.html` rename plugin (outputs to `docs/svelte-prism/`)
- `svelte/src/App.svelte` — main style guide component
- `svelte/src/PrismApp.svelte` — Prism.js code highlighting component
- `svelte/src/prism/main.js` — Prism app entry point
- `svelte/src/theme.css` — shared CSS variables (light/dark)
