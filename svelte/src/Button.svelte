<script>
  let { variant = 'primary', size = 'default', onclick } = $props();

  function getClasses() {
    let v = 'btn-' + variant;
    let s = size !== 'default' ? 'btn-' + size : '';
    return (v + ' ' + s).trim();
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
    background: rgba(255, 113, 206, 0.15);
    color: var(--primary);
    border-color: var(--primary);
  }
  .btn-primary:hover {
    background: rgba(255, 113, 206, 0.3);
  }

  .btn-secondary {
    background: rgba(1, 205, 254, 0.15);
    color: var(--secondary);
    border-color: var(--secondary);
  }
  .btn-secondary:hover {
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
</style>