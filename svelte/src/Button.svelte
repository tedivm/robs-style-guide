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
  .btn {
    display: inline-block;
    border-radius: var(--radius);
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s;
    border: 1px solid transparent;
  }

  .btn-primary {
    background: rgba(188, 0, 129, 0.15);
    color: var(--primary);
    border-color: var(--primary);
  }
  .btn-primary:hover {
    background: rgba(188, 0, 129, 0.3);
  }

  .btn-secondary {
    background: rgba(96, 32, 192, 0.15);
    color: var(--secondary);
    border-color: var(--secondary);
  }
  .btn-secondary:hover {
    background: rgba(96, 32, 192, 0.3);
  }

  .btn-tertiary {
    background: rgba(1, 205, 254, 0.15);
    color: var(--accent);
    border-color: var(--accent);
  }
  .btn-tertiary:hover {
    background: rgba(1, 205, 254, 0.3);
  }

  .btn-destructive {
    background: rgba(255, 80, 80, 0.15);
    color: var(--destructive);
    border-color: var(--destructive);
  }
  .btn-destructive:hover {
    background: rgba(255, 80, 80, 0.3);
  }

  .btn-outline {
    background: transparent;
    color: var(--foreground);
    border-color: var(--border);
  }
  .btn-outline:hover {
    color: var(--primary);
    border-color: var(--primary);
  }

  .btn-ghost {
    background: transparent;
    color: var(--foreground);
  }
  .btn-ghost:hover {
    background: var(--muted);
  }

  .btn-link {
    background: transparent;
    color: var(--primary);
  }
  .btn-link:hover {
    opacity: 0.85;
  }

  .btn-gradient {
    border: 1px solid transparent;
    background: var(--gradient) padding-box, var(--gradient-reverse) border-box;
    color: #ffffff;
  }
  .btn-gradient:hover {
    background:
      linear-gradient(90deg, rgba(188, 0, 129, 0.3), rgba(96, 32, 192, 0.3), rgba(0, 92, 181, 0.3)) padding-box,
      var(--gradient-reverse) border-box;
  }

  .btn-sm {
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
  }
  .btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  .btn:not(.btn-sm):not(.btn-lg) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.45rem;
    line-height: 0;
  }

  .theme-toggle {
    background: rgba(185, 109, 255, 0.15);
    color: var(--secondary);
    border-color: var(--secondary);
  }
  .theme-toggle svg {
    filter: drop-shadow(0 0 6px rgba(185, 109, 255, 0.7)) drop-shadow(0 0 14px rgba(185, 109, 255, 0.4));
  }
  .theme-toggle:hover {
    background: rgba(185, 109, 255, 0.3);
  }

  :global(.dark) .theme-toggle {
    background: rgba(1, 205, 254, 0.15);
    color: var(--accent);
    border-color: var(--accent);
  }
  :global(.dark) .theme-toggle svg {
    color: #ffe033;
    filter: drop-shadow(0 0 6px rgba(255, 224, 51, 0.7)) drop-shadow(0 0 14px rgba(255, 224, 51, 0.4));
  }
  :global(.dark) .theme-toggle:hover {
    background: rgba(1, 205, 254, 0.3);
  }
</style>