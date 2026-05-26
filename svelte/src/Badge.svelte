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
    background: rgba(255, 113, 206, 0.15);
    color: var(--primary);
  }

  .badge-secondary {
    background: rgba(1, 205, 254, 0.15);
    color: var(--secondary);
  }

  .badge-accent {
    background: rgba(185, 109, 255, 0.15);
    color: var(--accent);
  }

  .badge-destructive {
    background: rgba(255, 80, 80, 0.15);
    color: var(--destructive);
  }

  .badge-success {
    background: rgba(80, 200, 120, 0.15);
    color: var(--success);
  }

  .badge-warning {
    background: rgba(255, 190, 50, 0.15);
    color: var(--warning);
  }

  .badge-gradient {
    border: 1px solid transparent;
    background: var(--gradient) padding-box, var(--gradient-reverse) border-box;
    color: #ffffff;
  }
</style>