<script>
  export let variant = 'default';

  function getStyles() {
    const c = variant === 'default' ? 'var(--primary)'
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
