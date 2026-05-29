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
