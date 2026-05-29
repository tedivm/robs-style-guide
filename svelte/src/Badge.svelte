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