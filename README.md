# Rob's Style Guide

Shared design system for Rob's web services. Documents a cohesive visual language — dark purple palette with pink/purple/cyan accents, dual-mode (dark/light) support, typography, UI components, and layout conventions — with reference implementations in vanilla HTML and Svelte.

## Live Demo

Hosted at https://tedivm.github.io/robs-style-guide/

| Page | URL |
| --- | --- |
| Landing | https://tedivm.github.io/robs-style-guide/ |
| Vanilla style guide | https://tedivm.github.io/robs-style-guide/vanilla/ |
| Vanilla code highlighting | https://tedivm.github.io/robs-style-guide/vanilla/prism.html |
| Vanilla icons | https://tedivm.github.io/robs-style-guide/vanilla/icons.html |
| Svelte style guide | https://tedivm.github.io/robs-style-guide/svelte/style/ |
| Svelte code highlighting | https://tedivm.github.io/robs-style-guide/svelte/prism/ |
| Svelte icons | https://tedivm.github.io/robs-style-guide/svelte/icons/ |

## Development

```bash
# Local preview (nginx on localhost:9500)
make serve
make stop

# Svelte dev server
cd svelte && npm run dev

# Build for production
cd svelte && npm run build        # Svelte app → docs/svelte/style/
cd svelte && npm run build:prism  # Prism page → docs/svelte/prism/
cd svelte && npm run build:icons  # Icons page → docs/svelte/icons/
cd svelte && npm run build:all    # All three
```

## Deployment

Push to `main` triggers a GitHub Actions build and deploys to GitHub Pages.

## Tech

- **Vanilla:** HTML/CSS/JS, zero dependencies
- **Svelte:** Svelte 5 (runes), Vite 8
- **Fonts:** Source Serif 4, Source Code Pro (self-hosted)
- **Syntax highlighting:** Prism.js (loaded per-page)
- **Icons:** Tabler Icons (SVG sprites)

## Theme Skill

The `robs-theme-implementation` skill in `.agents/skills/` is the authoritative reference for applying this theme in other projects.
