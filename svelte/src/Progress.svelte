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
