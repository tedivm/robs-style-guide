<script>
</script>

<div class="card">
  <slot name="header" />
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
</style>
