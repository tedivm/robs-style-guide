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
var toggle = document.getElementById('theme-toggle');
var isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
if (isLight) {
  document.documentElement.classList.add('light');
  toggle.textContent = 'Toggle Dark Mode';
}
toggle.addEventListener('click', function() {
  isLight = !isLight;
  document.documentElement.classList.toggle('light', isLight);
  toggle.textContent = isLight ? 'Toggle Dark Mode' : 'Toggle Light Mode';
});
```

### How it works

- Default is dark mode (`:root` in CSS defines dark colors)
- `.light` class on `<html>` overrides to light colors
- Checks `prefers-color-scheme: light` media query on load
- Button toggles `.light` class on `<html>` element
- Button text switches between "Toggle Dark Mode" and "Toggle Light Mode"

## Svelte 5

Light mode is the default. A `.dark` class on `<html>` overrides to dark colors. Uses the `$state` rune for reactivity.

```svelte
<script>
  import { onMount } from 'svelte';
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

<button class="btn btn-primary" onclick={toggle}>
  {dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
</button>
```

### How it works

- Default is light mode (`:root` in CSS defines light colors)
- `.dark` class on `<html>` overrides to dark colors
- Checks `prefers-color-scheme: dark` media query on mount
- Uses Svelte 5 `$state` rune for reactivity
- Button text switches between "Toggle Light Mode" and "Toggle Dark Mode"

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
