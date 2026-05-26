# AGENTS.md

## Project Overview

Rob's Style Guide is a shared design system replicated across multiple implementation frameworks. The same visual theme, tokens, and components appear identically in each system. New frameworks can be added over time — every feature gets a page in every system.

### Systems

| System | Source | Build Output | Description |
| --- | --- | --- | --- |
| **Vanilla** | `docs/vanilla/` | — | HTML/CSS/JS, zero dependencies. **Source of truth for theme.** |
| **Svelte** | `svelte/` | `docs/svelte/style/`, `docs/svelte/prism/` | Svelte 5 (runes), Vite 8 |

### Entry Point

`docs/index.html` — Landing page that links to each system and feature. Not a style guide itself, just an entrypoint.

### Feature Pages

Each feature is implemented in every system. Pages are paired by feature:

| Feature | Vanilla | Svelte |
| --- | --- | --- |
| Style guide | `docs/vanilla/index.html` | `docs/svelte/style/` |
| Code highlighting | `docs/vanilla/prism.html` | `docs/svelte/prism/` |
| Icons | `docs/vanilla/icons.html` | `docs/svelte/icons/` |

When adding a new feature, create a corresponding page in each system so the visual output matches across all implementations.

## Development Commands

```bash
# Local preview (nginx on localhost:9500)
make serve
make stop

# Svelte dev server
cd svelte && npm run dev

# Build for production
cd svelte && npm run build        # Svelte app -> docs/svelte/style/
cd svelte && npm run build:prism  # Prism page -> docs/svelte/prism/
cd svelte && npm run build:icons  # Icons page -> docs/svelte/icons/
cd svelte && npm run build:all    # All three
```

## Tech Stack

- **Vanilla:** HTML/CSS/JS, zero dependencies
- **Svelte:** Svelte 5 (runes), Vite 8, Prism.js (CDN)
- **Fonts:** Source Serif 4, Source Code Pro (self-hosted)
- **CI/CD:** GitHub Actions (`deploy.yml`) — push to `main` triggers build and deploy

## Design Tokens

Global (same for dark and light):

| Color | Value |
| --- | --- |
| Primary (pink) | `#bc0081` |
| Secondary (purple) | `#6f26c9` |
| Tertiary (cyan) | `#005cb5` |
| Success | `#50c878` |
| Warning | `#ffbe32` |
| Error | `#ee343b` |

Mode-dependent:

| Color | Dark Mode | Light Mode |
| --- | --- | --- |
| Background | `#150d1e` | `#f5f1fc` |
| Surface / Cards | `#1a1130` | `#e9e0f7` |
| Code blocks / Inputs | `#0f0a1a` | `#eee5f9` |
| Borders / Dividers | `#3d2b5a` | `#d4c2ec` |
| Body text | `#dcdcdc` | `#1d152a` |
| Muted text | `#b4b4b4` | `#5e546d` |
| Dim text | `#999` | `#756a87` |

Both implementations share the same palette. Vanilla HTML (`docs/index.html`) is the canonical reference for styling.

## Conventions

- Vanilla HTML stays dependency-free — no build tools, no frameworks
- Svelte implementation is independent — use Svelte 5 best practices (runes, async components)
- Dual-mode (dark/light) support across all pages
- Self-host fonts; avoid Google Fonts CDN
- **When the theme changes, update the skill too** — any change to theme colors, CSS variables, components, typography, or styling in `docs/vanilla/theme.css` or `svelte/src/theme.css` must be reflected in `.agents/skills/robs-theme-implementation/` (both `SKILL.md` and `assets/*.css`). The skill is the authoritative reference for implementing this theme in other projects and will drift out of sync if not updated alongside theme changes

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`:

1. Checks out code, sets up Node 24
2. Runs `npm ci` + `npm run build:all` in `svelte/`
3. Uploads entire `docs/` directory as Pages artifact
4. Deploys via `actions/deploy-pages`

## File Structure Notes

- `svelte/vite.config.js` — main Svelte build (outputs to `docs/svelte/style/`)
- `svelte/vite.prism.config.js` — Prism build with `prism.index.html` rename plugin (outputs to `docs/svelte/prism/`)
- `svelte/vite.icons.config.js` — Icons build with `icons.index.html` rename plugin (outputs to `docs/svelte/icons/`)
- `svelte/src/App.svelte` — main style guide component
- `svelte/src/PrismApp.svelte` — Prism.js code highlighting component
- `svelte/src/IconsApp.svelte` — Tabler Icons showcase component
- `svelte/src/prism/main.js` — Prism app entry point
- `svelte/src/icons/main.js` — Icons app entry point
- `svelte/src/theme.css` — shared CSS variables (light/dark)
