# Components Reference

Complete component implementations for Rob's Style Guide. Each component includes vanilla HTML/CSS and Svelte 5 variants.

## Table of Contents

1. [Buttons](#buttons)
2. [Badges](#badges)
3. [Tags](#tags)
4. [Cards](#cards)
5. [Alert / Instructions](#alert-instructions)
6. [Progress Bars](#progress-bars)
7. [Status Dots](#status-dots)
8. [Forms](#forms)
9. [Tables](#tables)
10. [Horizontal Rules](#horizontal-rules)
11. [Layout Utilities](#layout-utilities)
12. [Swatch / Color](#swatch-color)
13. [Toolbar](#toolbar)
14. [Glossary](#glossary)
15. [Config Sections](#config-sections)
16. [Avatar](#avatar)

---

## Buttons

### Variants

| Variant | Description |
| --- | --- |
| `primary` | Pink background with pink border |
| `secondary` | Purple background with purple border |
| `subtle` | Transparent with border color |
| `destructive` | Red/error background with red border |
| `outline` | Transparent with border, turns pink on hover |
| `ghost` | Transparent, no border, surface background on hover |
| `link` | Transparent, primary color text |
| `gradient` | Gradient background with gradient border |

### Sizes

| Size | Class |
| --- | --- |
| `sm` | `btn-sm` (0.25rem 0.6rem padding, 0.75rem font) |
| `default` | `btn` (0.5rem 1rem padding, 0.85rem font) |
| `lg` | `btn-lg` (0.75rem 1.5rem padding, 1rem font) |

### Vanilla CSS

```css
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'Source Serif 4', 'Roboto Slab', serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn-primary { background: var(--primary-15); color: var(--primary); border-color: var(--primary); }
.btn-primary:hover { background: var(--primary-30); }
.btn-secondary { background: var(--secondary-15); color: var(--secondary); border-color: var(--secondary); }
.btn-secondary:hover { background: var(--secondary-30); }
.btn-tertiary { background: var(--accent-15); color: var(--accent); border-color: var(--accent); }
.btn-tertiary:hover { background: var(--accent-30); }
.btn-subtle { background: transparent; color: var(--muted); border-color: var(--border); }
.btn-subtle:hover { color: var(--fg); border-color: var(--muted); }
.btn-destructive { background: var(--error-15); color: var(--error); border-color: var(--error); }
.btn-destructive:hover { background: var(--error-30); }
.btn-outline { background: transparent; color: var(--fg); border-color: var(--border); }
.btn-outline:hover { color: var(--primary); border-color: var(--primary); }
.btn-ghost { background: transparent; color: var(--fg); border: none; }
.btn-ghost:hover { background: var(--surface); }
.btn-link { background: transparent; color: var(--primary); border: none; }
.btn-link:hover { opacity: 0.85; }
.btn-gradient { border: 1px solid transparent; background: var(--gradient) padding-box, var(--gradient-reverse) border-box; color: var(--text-on-gradient); }
.btn-gradient:hover { background: linear-gradient(90deg, var(--primary-30), var(--secondary-30), var(--accent-30)) padding-box, var(--gradient-reverse) border-box; }
.btn-sm { padding: 0.25rem 0.6rem; font-size: 0.75rem; }
.btn-lg { padding: 0.75rem 1.5rem; font-size: 1rem; }
.btn-icon { display: inline-flex; align-items: center; justify-content: center; padding: 0.45rem; line-height: 0; }
```

### Svelte `Button.svelte`

```svelte
<script>
  let { variant = 'primary', size = 'default', onclick, icon = false, class: extraClass = '' } = $props();

  function getClasses() {
    let v = 'btn-' + variant;
    let s = size !== 'default' ? 'btn-' + size : '';
    let i = icon ? 'btn-icon' : '';
    return [v, s, i, extraClass].filter(Boolean).join(' ');
  }
</script>

<button class="btn {getClasses()}" {onclick}>
  <slot />
</button>

<style>
  /* Button styles are in theme.css */
</style>
```

### Usage

```svelte
<Button variant="primary" size="sm" onclick={fn}>Click</Button>
```

---

## Badges

### Variants

| Variant | Description |
| --- | --- |
| `app` / `primary` | Pink color |
| `ai` / `secondary` | Purple color |
| `infra` / `accent` | Cyan color |
| `success` | Green color |
| `warn` / `warning` | Yellow color |
| `error` / `destructive` | Red color |
| `gradient` | Gradient border with white text |

### Vanilla CSS

```css
.badge { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.75em; font-weight: 600; }
.badge-app { background: var(--primary-15); color: var(--primary); }
.badge-ai { background: var(--secondary-15); color: var(--secondary); }
.badge-infra { background: var(--accent-15); color: var(--accent); }
.badge-success { background: var(--success-15); color: var(--success); }
.badge-warn { background: var(--warning-15); color: var(--warning); }
.badge-error { background: var(--error-15); color: var(--error); }
.badge-gradient { border: 1px solid transparent; background: var(--gradient) padding-box, var(--gradient-reverse) border-box; color: var(--text-on-gradient); }
```

### Svelte `Badge.svelte`

```svelte
<script>
  let { variant = 'primary' } = $props();

  function getClasses() {
    return 'badge badge-' + variant;
  }
</script>

<span class={getClasses()}>
  <slot />
</span>

<style>
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.75em;
    font-weight: 600;
  }

  .badge-primary {
    background: var(--primary-15);
    color: var(--primary);
  }

  .badge-secondary {
    background: var(--accent-15);
    color: var(--secondary);
  }

  .badge-accent {
    background: var(--secondary-15);
    color: var(--accent);
  }

  .badge-destructive {
    background: var(--destructive-15);
    color: var(--destructive);
  }

  .badge-success {
    background: var(--success-15);
    color: var(--success);
  }

  .badge-warning {
    background: var(--warning-15);
    color: var(--warning);
  }

  .badge-gradient {
    border: 1px solid transparent;
    background: var(--gradient) padding-box, var(--gradient-reverse) border-box;
    color: var(--text-on-gradient);
  }
</style>
```

---

## Tags

### Vanilla CSS

```css
.tag {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  background: var(--surface);
  border-radius: 3px;
  font-size: 0.75rem;
  color: var(--muted);
  margin: 0.1rem;
}
```

---

## Cards

### Vanilla CSS

```css
.card {
  background: var(--surface);
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid var(--border);
  transition: border-color 0.2s;
}

.card:hover { border-color: var(--primary); }
.card a.card-link { text-decoration: none; }
.card a.card-link:hover { text-decoration: none; }
.card-header { font-weight: 600; margin-bottom: 0.5rem; color: var(--accent); font-size: 1.1rem; }
.card-body { font-size: 0.9rem; color: var(--surface-fg); }
.card-meta { font-size: 0.8rem; color: var(--muted); margin-top: 0.5rem; font-family: 'Source Code Pro', monospace; }
```

### Svelte `Card.svelte`

```svelte
<script>
</script>

<div class="card">
  <div class="card-header-wrapper"><slot name="header" /></div>
  <slot name="body" />
</div>

<style>
  .card {
    background: var(--card);
    color: var(--card-foreground);
    padding: 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    margin-bottom: 0.5rem;
  }

  .card:hover {
    border-color: var(--primary);
  }

  .card-header-wrapper {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--accent);
    font-size: 1.1rem;
  }
</style>
```

---

## Alert / Instructions

### Vanilla CSS

```css
.instructions {
  background: var(--surface);
  padding: 1rem;
  border-radius: 5px;
  margin: 0.5rem 0;
  border-left: 3px solid var(--primary);
}

.instructions-info { border-left-color: var(--secondary); }
.instructions-success { border-left-color: var(--success); }
.instructions-warn { border-left-color: var(--warning); }
.instructions-error { border-left-color: var(--error); }
```

### Svelte `Alert.svelte`

```svelte
<script>
  let { variant = 'default' } = $props();

  function getStyles() {
    const c = variant === 'default' ? 'var(--primary)'
      : variant === 'secondary' ? 'var(--secondary)'
      : variant === 'destructive' ? 'var(--destructive)'
      : variant === 'success' ? 'var(--success)'
      : variant === 'warning' ? 'var(--warning)'
      : 'var(--primary)';
    return 'background: var(--muted); border-left: 3px solid ' + c + ';';
  }
</script>

<div class="alert" style={getStyles()}>
  <slot />
</div>

<style>
  .alert {
    padding: 1rem;
    border-radius: var(--radius);
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }
</style>
```

---

## Progress Bars

### Vanilla CSS

```css
.progress { background: var(--surface); border-radius: 4px; height: 8px; overflow: hidden; margin: 0.5rem 0; }
.progress-bar { height: 100%; border-radius: 4px; }
.progress-pink { background: var(--primary); }
.progress-cyan { background: var(--accent); }
.progress-purple { background: var(--secondary); }
.progress-success { background: var(--success); }
.progress-bar.gradient { background: var(--gradient); }
.progress-bar.gradient-reverse { background: var(--gradient-reverse); }
```

### Svelte `Progress.svelte`

```svelte
<script>
  let { value = 0, color = 'primary' } = $props();

  function getStyles() {
    const c = color === 'primary' ? 'var(--primary)'
      : color === 'secondary' ? 'var(--secondary)'
      : color === 'accent' ? 'var(--accent)'
      : color === 'success' ? 'var(--success)'
      : 'var(--primary)';
    return 'background: ' + c + '; width: ' + value + '%;';
  }
</script>

<div class="progress">
  <div class="bar" style={getStyles()}></div>
</div>

<style>
  .progress {
    background: var(--muted);
    border-radius: 4px;
    height: 8px;
    overflow: hidden;
    margin: 0.5rem 0;
  }
  .bar {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s;
  }
</style>
```

### Svelte `GradientProgress.svelte`

```svelte
<script>
  let { value = 0, reverse = false } = $props();
</script>

<div class="progress">
  <div class="bar {reverse ? 'bar-reverse' : ''}" style="width: {value}%;"></div>
</div>

<style>
  .progress {
    background: var(--muted);
    border-radius: 4px;
    height: 8px;
    overflow: hidden;
    margin: 0.5rem 0;
  }
  .bar {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s;
    background: var(--gradient);
  }
  .bar-reverse {
    background: var(--gradient-reverse);
  }
</style>
```

---

## Status Dots

### Vanilla CSS

```css
.status-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 0.4rem; }
.status-online { background: var(--success); }
.status-offline { background: var(--error); }
.status-warn { background: var(--warning); }
```

---

## Forms

### Vanilla CSS

```css
input[type="text"], input[type="password"], textarea, select {
  background: var(--code);
  border: 1px solid var(--surface);
  color: var(--fg);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.85rem;
  width: 100%;
  max-width: 400px;
}

input[type="text"]:focus, input[type="password"]:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary);
}

textarea { min-height: 80px; resize: vertical; }
label { display: block; margin: 0.5rem 0 0.25rem; color: var(--muted); font-size: 0.85rem; }
```

---

## Tables

### Vanilla CSS

```css
table { width: 100%; border-collapse: collapse; margin: 0.5rem 0; }
th, td { text-align: left; padding: 10px 14px; border-bottom: 1px solid color-mix(in srgb, var(--border) 40%, transparent); }
th { color: var(--muted); font-weight: 600; font-size: 0.8em; text-transform: uppercase; letter-spacing: 0.05em; }
```

---

## Horizontal Rules

### Vanilla CSS

```css
hr { border: none; height: 1px; margin: 1.5rem 0; background: var(--gradient); filter: drop-shadow(0 0 6px color-mix(in srgb, var(--primary) 70%, transparent)) drop-shadow(0 0 16px color-mix(in srgb, var(--secondary) 40%, transparent)); }
hr.reverse { background: var(--gradient-reverse); filter: drop-shadow(0 0 6px color-mix(in srgb, var(--accent) 70%, transparent)) drop-shadow(0 0 16px color-mix(in srgb, var(--secondary) 40%, transparent)); }
```

---

## Layout Utilities

### Grid

```css
.grid { display: grid; gap: 1rem; }
.grid-2 { grid-template-columns: 1fr 1fr; }
.grid-3 { grid-template-columns: 1fr 1fr 1fr; }
```

### Flex

```css
.flex { display: flex; gap: 0.5rem; align-items: center; }
.flex-wrap { flex-wrap: wrap; }
```

---

## Swatch / Color

### Vanilla CSS

```css
.swatch { display: inline-block; width: 28px; height: 28px; border-radius: 4px; vertical-align: middle; margin-right: 6px; border: 1px solid var(--border); }
.color-cell { display: flex; align-items: center; gap: 6px; }
.color-hex { font-family: 'Source Code Pro', monospace; font-size: 0.85rem; }
```

---

## Toolbar

### Vanilla CSS

```css
.toolbar { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
.back-link { font-size: 0.85rem; color: var(--muted); text-decoration: none; }
.back-link:hover { text-decoration: underline; }
```

---

## Glossary

### Vanilla CSS

```css
.glossary { margin: 0.5rem 0; padding: 0.5rem 0; border-bottom: 1px solid var(--surface); }
.glossary-term { font-weight: bold; font-family: monospace; color: var(--primary); }
.glossary-desc { color: var(--fg); font-size: 0.9rem; }
```

---

## Config Sections

### Vanilla CSS

```css
.config-section { margin: 1.5rem 0; }
.config-path { font-size: 0.85rem; color: var(--dim); font-family: monospace; margin-bottom: 0.3rem; }
```

---

## Avatar

### Vanilla CSS

```css
.avatar { display: inline-block; width: 32px; height: 32px; border-radius: 50%; background: var(--border); vertical-align: middle; }
```
