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
  /* Button styles are in theme.css */
</style>