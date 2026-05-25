<script>
  export let value = 0;
  export let reverse = false;
</script>

<div class="progress">
  <div class="bar {reverse ? 'bar-reverse' : ''}" style="width: {value}%;"></div>
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
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
  }
  .bar-reverse {
    background: linear-gradient(90deg, var(--accent), var(--secondary), var(--primary));
  }
</style>
