# Theme Toggle JavaScript

Two patterns exist depending on the naming scheme. The conventions are opposite between implementations.

## Key Differences

| Aspect | Vanilla HTML | Svelte |
| --- | --- | --- |
| Default mode | Dark (`:root` defines dark colors) | Light (`:root` defines light colors) |
| Override class | `.light` on `<html>` | `.dark` on `<html>` |
| Media query | `prefers-color-scheme: light` | `prefers-color-scheme: dark` |

**Vanilla assumes dark mode by default. Svelte assumes light mode by default.**

## Vanilla HTML

Dark mode is the default. A `.light` class on `<html>` overrides to light colors.

```js
var sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
var moonSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
var toggle = document.getElementById('theme-toggle');
var isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
if (isLight) {
  document.documentElement.classList.add('light');
  toggle.innerHTML = moonSvg;
  toggle.title = 'Toggle Dark Mode';
}
toggle.addEventListener('click', function() {
  isLight = !isLight;
  document.documentElement.classList.toggle('light', isLight);
  toggle.innerHTML = isLight ? moonSvg : sunSvg;
  toggle.title = isLight ? 'Toggle Dark Mode' : 'Toggle Light Mode';
});
```

### How it works

- Default is dark mode (`:root` in CSS defines dark colors)
- `.light` class on `<html>` overrides to light colors
- Checks `prefers-color-scheme: light` media query on load
- Button toggles `.light` class on `<html>` element
- **Dark mode shows sun icon** (click to go to light mode)
- **Light mode shows moon icon** (click to go to dark mode)

## Svelte 5

Light mode is the default. A `.dark` class on `<html>` overrides to dark colors. Uses the `$state` rune for reactivity.

```svelte
<script>
  import { onMount } from 'svelte';
  import { IconSun, IconMoon } from '@tabler/icons-svelte';
  let dark = $state(false);

  function toggle() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
  }

  onMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dark = true;
      document.documentElement.classList.add('dark');
    }
  });
</script>

<button class="btn btn-primary btn-icon" onclick={toggle} title={dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}>
  {#if dark}
    <IconSun size={18} />
  {:else}
    <IconMoon size={18} />
  {/if}
</button>
```

### How it works

- Default is light mode (`:root` in CSS defines light colors)
- `.dark` class on `<html>` overrides to dark colors
- Checks `prefers-color-scheme: dark` media query on mount
- Uses Svelte 5 `$state` rune for reactivity
- **Dark mode shows sun icon** (click to go to light mode)
- **Light mode shows moon icon** (click to go to dark mode)

## Svelte with Prism.js

When Prism.js code highlighting is involved, re-run `Prism.highlightAll()` on toggle to update syntax colors. Also clear inline styles on `<pre>` elements to avoid stale styling.

```svelte
<script>
  import { onMount, tick } from 'svelte';
  let dark = $state(false);

  function toggle() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
    Prism.highlightAll();
    for (const pre of document.querySelectorAll('pre')) {
      pre.removeAttribute('style');
    }
  }

  onMount(async () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dark = true;
      document.documentElement.classList.add('dark');
    }
    // ... load prism scripts ...
    await tick();
    Prism.highlightAll();
    for (const pre of document.querySelectorAll('pre')) {
      pre.removeAttribute('style');
    }
  });
</script>
```

### How it works

- Same toggle logic as standard Svelte pattern
- After toggling the `.dark` class, calls `Prism.highlightAll()` to re-highlight all code blocks with the new theme
- Clears inline `style` attributes on `<pre>` elements to prevent stale styling from the previous highlight pass
- On mount, waits for the DOM to update with `tick()` before initial highlighting
