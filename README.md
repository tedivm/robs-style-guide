# Rob's Style Guide

Shared design system for Rob's web services. Documents a cohesive visual language — color palette, typography, UI components, and layout conventions — with two reference implementations.

## Pages

| Path | Description |
| --- | --- |
| `/` | Vanilla HTML style guide (canonical reference) |
| `/svelte/` | Svelte component library demo |
| `/prism/` | Prism.js code highlighting (vanilla) |
| `/svelte-prism/` | Prism.js code highlighting (Svelte) |

## Development

```bash
# Local dev server (static site)
make serve   # nginx on localhost:9500
make stop

# Svelte dev server
cd svelte && npm run dev

# Build for production
cd svelte && npm run build      # Svelte app → docs/svelte/
cd svelte && npm run build:prism # Prism page → docs/svelte-prism/
cd svelte && npm run build:all   # Both
```

## Deployment

Push to `main` triggers a GitHub Actions build and deploys to GitHub Pages.

## Tech

- **Vanilla:** HTML/CSS/JS, no dependencies
- **Svelte:** Svelte 5 (runes), Vite, Prism.js (CDN)
- **Fonts:** Source Serif 4, Source Code Pro (Google Fonts CDN, self-hostable)
