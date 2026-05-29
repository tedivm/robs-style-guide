# Roadmap

## Theme

1. **Dark mode as default everywhere** — Svelte currently defaults to light mode; align both implementations to dark as default
2. **Review all hardcoded colors not part of variables** — audit CSS and components for any hex values not using `--primary`, `--secondary`, `--accent`, etc.

## Code Quality

1. **Migrate remaining components to Svelte 5 runes** — `Alert.svelte`, `Progress.svelte`, and `GradientProgress.svelte` use `export let` (Svelte 4 syntax); convert to `$props()`
2. **Self-host Prism.js** — currently loaded from Cloudflare CDN (v1.29.0, stale since 2023); bundle or self-host for supply-chain safety
3. **Self-host fonts** — all pages load from `fonts.googleapis.com` CDN; preferred approach is self-hosted Source Serif 4 and Source Code Pro
4. **Add npm to Dependabot** — only `github-actions` is monitored; add `npm` ecosystem to keep Svelte, Vite, and dependencies updated

## UI

1. **Better tables — header rows** — improve `th` styling, add sticky headers, visual distinction from body rows
2. **Theme toggle (light/dark) icons** — replace text toggle with icon-based toggle using Tabler Icons
3. **Gradient icon examples** — showcase icons with gradient fills, gradient backgrounds, and gradient overlays
