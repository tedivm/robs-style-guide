<script>
  import './theme.css';
  import IconSun from '@tabler/icons-svelte-runes/icons/sun';
  import IconMoon from '@tabler/icons-svelte-runes/icons/moon';

  let dark = $state(true);

  function toggle() {
    dark = !dark;
    document.documentElement.classList.toggle('light', !dark);
  }

  $effect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      dark = false;
      document.documentElement.classList.add('light');
    }
  });
</script>

<div class="container">
  <h1>Interactivity</h1>
  <p class="subtitle">Activity indicators and loading states</p>

  <div class="toolbar">
    <button class="btn btn-icon theme-toggle" onclick={toggle} title={dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}>
      {#if dark}
        <IconSun size={18} />
      {:else}
        <IconMoon size={18} />
      {/if}
    </button>
    <a href="../style/" class="back-link">← Back to style guide</a>
    <a href="../prism/" class="back-link">Code highlighting →</a>
    <a href="../icons/" class="back-link">Icons →</a>
  </div>

  <h2>Gradient Spinner</h2>

  <p class="muted">Circular spinner using a conic gradient (primary → secondary → accent) with glow. 4s rotation cycle, linear easing. Sizes: 24px (sm), 40px (default), 56px (lg). Track variant masks the center with a background-colored inset for a ring effect.</p>

  <div class="demo-row">
    <div class="demo-label">Solid</div>
    <div class="demo-area">
      <div class="spinner spinner-sm"></div>
      <div class="spinner"></div>
      <div class="spinner spinner-lg"></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Track</div>
    <div class="demo-area">
      <div class="spinner-track spinner-track-sm"></div>
      <div class="spinner-track"></div>
      <div class="spinner-track spinner-track-lg"></div>
    </div>
  </div>

  <h2>Pulse Dot</h2>

  <p class="muted">Pulsing indicator with an expanding ring via ::before pseudo-element. 1.5s cycle, ease-out easing. Ring scales from 0.8→1.8, fades from opacity 1→0. Sizes: 8px (sm), 12px (default), 16px (lg). Six color variants mapped to theme tokens.</p>

  <div class="demo-row">
    <div class="demo-label">Variants</div>
    <div class="demo-area">
      <div class="pulse-dot pulse-dot-pink"></div>
      <div class="pulse-dot pulse-dot-cyan"></div>
      <div class="pulse-dot pulse-dot-purple"></div>
      <div class="pulse-dot pulse-dot-success"></div>
      <div class="pulse-dot pulse-dot-warn"></div>
      <div class="pulse-dot pulse-dot-error"></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Sizes</div>
    <div class="demo-area">
      <div class="pulse-dot pulse-dot-pink pulse-dot-sm"></div>
      <div class="pulse-dot pulse-dot-pink"></div>
      <div class="pulse-dot pulse-dot-pink pulse-dot-lg"></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Inline</div>
    <div class="demo-area">
      <span>Processing<span class="pulse-dot pulse-dot-cyan pulse-dot-sm" style="margin-left: 0.4rem; vertical-align: middle;"></span></span>
    </div>
  </div>

  <h2>Skeleton Shimmer</h2>

  <p class="muted">Placeholder elements with a gradient sweep animation on ::after. 1.5s cycle, ease-in-out easing, translates from -100% to 100%. Shimmer gradient: transparent → 40% border → transparent. Width utilities: 25%, 50%, 75%, 100%. Height variants: 8px (sm), 12px (default), 16px (lg).</p>

  <div class="demo-row">
    <div class="demo-label">Lines</div>
    <div class="demo-area">
      <div style="width: 280px;">
        <div class="skeleton skeleton-line skeleton-line-sm w-75"></div>
        <div class="skeleton skeleton-line w-100"></div>
        <div class="skeleton skeleton-line w-50"></div>
        <div class="skeleton skeleton-line skeleton-line-lg w-25"></div>
      </div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Card</div>
    <div class="demo-area">
      <div class="skeleton-card demo-skeleton-card">
        <div class="skeleton skeleton-line"></div>
        <div style="height: 0.5rem;"></div>
        <div class="skeleton skeleton-line skeleton-line-sm w-100"></div>
        <div class="skeleton skeleton-line skeleton-line-sm w-75"></div>
        <div class="skeleton skeleton-line skeleton-line-sm w-50"></div>
      </div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">With avatar</div>
    <div class="demo-area">
      <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
        <div class="skeleton skeleton-avatar"></div>
        <div style="flex: 1;">
          <div class="skeleton skeleton-line w-50"></div>
          <div style="height: 0.4rem;"></div>
          <div class="skeleton skeleton-line skeleton-line-sm w-75"></div>
        </div>
      </div>
    </div>
  </div>

  <h2>Dot Loader</h2>

  <p class="muted">Three bouncing dots with staggered animation delays. 1.6s cycle, ease-in-out easing. Each dot: translateY 0→-8px, opacity 0.4→1, peaks at 40% keyframe. Stagger: 0s → 0.2s → 0.4s. Gradient variant uses primary/secondary/accent. Sizes: 6px (sm), 8px (default), 12px (lg). Solid and single-color variants available.</p>

  <div class="demo-row">
    <div class="demo-label">Gradient</div>
    <div class="demo-area">
      <div class="dot-loader"><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Solid</div>
    <div class="demo-area">
      <div class="dot-loader dot-loader-solid"><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Single color</div>
    <div class="demo-area">
      <div class="dot-loader dot-loader-pink"><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Sizes</div>
    <div class="demo-area">
      <div class="dot-loader dot-loader-sm"><span></span><span></span><span></span></div>
      <div class="dot-loader"><span></span><span></span><span></span></div>
      <div class="dot-loader dot-loader-lg"><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Inline</div>
    <div class="demo-area">
      <span>Loading<div class="dot-loader" style="margin-left: 0.4rem; vertical-align: middle;"><span></span><span></span><span></span></div></span>
    </div>
  </div>

  <h2>Bar Loader</h2>

  <p class="muted">Stacked horizontal bars with staggered scaleX animation. 3s cycle, ease-in-out easing. Each bar: scaleX 0.3→1.0, opacity 0.4→1, peaks at 50% keyframe. Stagger: 0s → 0.15s → 0.3s → 0.45s → 0.6s. Five-bar gradient: primary → primary/secondary blend → secondary → secondary/accent blend → accent. Sizes: 32px (sm), 48px (default), 64px (lg). Bar height scales with size: 3px (sm), 4px (default), 6px (lg).</p>

  <div class="demo-row">
    <div class="demo-label">Default</div>
    <div class="demo-area">
      <div class="bar-loader"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Sizes</div>
    <div class="demo-area">
      <div class="bar-loader bar-loader-sm"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="bar-loader"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="bar-loader bar-loader-lg"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Centered</div>
    <div class="demo-area">
      <div class="demo-centered">
        <div class="bar-loader"><span></span><span></span><span></span><span></span><span></span></div>
      </div>
    </div>
  </div>

  <h2>Vertical Bar Loader</h2>

  <p class="muted">Vertical bars side by side with staggered scaleY animation. 3s cycle, ease-in-out easing. Each bar: scaleY 0.3→1.0, opacity 0.4→1, peaks at 50% keyframe. Stagger: 0s → 0.15s → 0.3s → 0.45s → 0.6s. Five-bar gradient: primary → primary/secondary blend → secondary → secondary/accent blend → accent. Sizes: 32px (sm), 48px (default), 64px (lg). Bar width scales with size: 3px (sm), 4px (default), 6px (lg).</p>

  <div class="demo-row">
    <div class="demo-label">Default</div>
    <div class="demo-area">
      <div class="bar-loader-vertical"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Sizes</div>
    <div class="demo-area">
      <div class="bar-loader-vertical bar-loader-vertical-sm"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="bar-loader-vertical"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="bar-loader-vertical bar-loader-vertical-lg"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </div>

  <div class="demo-row">
    <div class="demo-label">Centered</div>
    <div class="demo-area">
      <div class="demo-centered">
        <div class="bar-loader-vertical"><span></span><span></span><span></span><span></span><span></span></div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 900px;
  }

  h1 {
    font-size: 1.8rem;
    margin: 2rem 0 0.75rem;
    color: var(--primary);
    text-shadow: 0 0 20px color-mix(in srgb, var(--primary) 60%, transparent), 0 0 40px color-mix(in srgb, var(--primary) 35%, transparent), 0 0 60px color-mix(in srgb, var(--primary) 20%, transparent);
  }

  h2 {
    font-size: 1.3rem;
    margin: 2rem 0 0.75rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid;
    border-image: var(--gradient) 1;
    color: var(--secondary);
    text-shadow: 0 0 20px color-mix(in srgb, var(--secondary) 50%, transparent), 0 0 40px color-mix(in srgb, var(--secondary) 30%, transparent), 0 0 60px color-mix(in srgb, var(--secondary) 15%, transparent);
    position: relative;
  }

  :global(.light) h1 {
    text-shadow: 0 0 20px color-mix(in srgb, var(--primary) 25%, transparent), 0 0 40px color-mix(in srgb, var(--primary) 12%, transparent);
  }

  :global(.light) h2 {
    text-shadow: 0 0 20px color-mix(in srgb, var(--secondary) 25%, transparent), 0 0 40px color-mix(in srgb, var(--secondary) 12%, transparent);
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient);
    filter: blur(6px);
    opacity: 0.7;
  }

  .subtitle {
    color: var(--foreground);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .back-link {
    font-size: 0.85rem;
    color: var(--muted-foreground);
    text-decoration: none;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  .muted {
    color: var(--muted-foreground);
  }

  p {
    margin: 0.5rem 0;
  }

  /* ==================== Gradient Spinner ==================== */

  .spinner-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--primary), var(--secondary), var(--accent), var(--primary));
    animation: spinner-rotate 4s linear infinite;
    box-shadow: 0 0 12px color-mix(in srgb, var(--primary) 40%, transparent),
                0 0 24px color-mix(in srgb, var(--secondary) 25%, transparent);
  }

  .spinner-sm {
    width: 24px;
    height: 24px;
  }

  .spinner-lg {
    width: 56px;
    height: 56px;
  }

  .spinner-track {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--card), var(--card), var(--card), var(--card));
    position: relative;
  }

  .spinner-track::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: var(--background);
  }

  .spinner-track::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--primary), var(--secondary), var(--accent), var(--primary));
    animation: spinner-rotate 4s linear infinite;
    z-index: 1;
  }

  .spinner-track::after {
    z-index: 2;
  }

  .spinner-track-sm {
    width: 24px;
    height: 24px;
  }

  .spinner-track-lg {
    width: 56px;
    height: 56px;
  }

  @keyframes spinner-rotate {
    to { transform: rotate(360deg); }
  }

  /* ==================== Pulse Dot ==================== */

  .pulse-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: relative;
  }

  .pulse-dot::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid currentColor;
    animation: pulse-ring 1.5s ease-out infinite;
    opacity: 0;
  }

  .pulse-dot::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: currentColor;
  }

  .pulse-dot-pink { color: var(--primary); }
  .pulse-dot-cyan { color: var(--accent); }
  .pulse-dot-purple { color: var(--secondary); }
  .pulse-dot-success { color: var(--success); }
  .pulse-dot-warn { color: var(--warning); }
  .pulse-dot-error { color: var(--destructive); }

  .pulse-dot-sm {
    width: 8px;
    height: 8px;
  }

  .pulse-dot-sm::before {
    inset: -3px;
    border-width: 1.5px;
  }

  .pulse-dot-lg {
    width: 16px;
    height: 16px;
  }

  .pulse-dot-lg::before {
    inset: -6px;
    border-width: 2.5px;
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.8);
      opacity: 1;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  /* ==================== Skeleton Shimmer ==================== */

  .skeleton {
    background: var(--card);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }

  .skeleton::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--border) 40%, transparent), transparent);
    animation: shimmer 1.5s ease-in-out infinite;
  }

  .skeleton-line {
    height: 12px;
    margin: 0.5rem 0;
    border-radius: 4px;
  }

  .skeleton-line-sm { height: 8px; }
  .skeleton-line-lg { height: 16px; }

  .skeleton-line.w-100 { width: 100%; }
  .skeleton-line.w-75  { width: 75%; }
  .skeleton-line.w-50  { width: 50%; }
  .skeleton-line.w-25  { width: 25%; }

  .skeleton-block {
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid var(--border);
  }

  .skeleton-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .skeleton-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 1rem;
  }

  .skeleton-card .skeleton-line:first-child {
    width: 60%;
    height: 14px;
  }

  @keyframes shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* ==================== Dot Loader ==================== */

  .dot-loader {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .dot-loader span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: dot-bounce 1.6s ease-in-out infinite;
  }

  .dot-loader span:nth-child(1) {
    background: var(--primary);
    animation-delay: 0s;
  }

  .dot-loader span:nth-child(2) {
    background: var(--secondary);
    animation-delay: 0.2s;
  }

  .dot-loader span:nth-child(3) {
    background: var(--accent);
    animation-delay: 0.4s;
  }

  .dot-loader-sm span {
    width: 6px;
    height: 6px;
  }

  .dot-loader-lg span {
    width: 12px;
    height: 12px;
  }

  .dot-loader-solid span {
    background: var(--foreground);
  }

  .dot-loader-pink span { background: var(--primary); }
  .dot-loader-pink span:nth-child(2) { background: color-mix(in srgb, var(--primary) 70%, transparent); }
  .dot-loader-pink span:nth-child(3) { background: color-mix(in srgb, var(--primary) 40%, transparent); }

  @keyframes dot-bounce {
    0%, 80%, 100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    40% {
      transform: translateY(-8px);
      opacity: 1;
    }
  }

  /* ==================== Bar Loader ==================== */

  .bar-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 48px;
  }

  .bar-loader span {
    width: 80%;
    height: 4px;
    border-radius: 2px;
    animation: bar-slide 3.0s ease-in-out infinite;
  }

  .bar-loader span:nth-child(1) {
    background: var(--primary);
    animation-delay: 0s;
  }

  .bar-loader span:nth-child(2) {
    background: color-mix(in srgb, var(--primary), var(--secondary));
    animation-delay: 0.15s;
  }

  .bar-loader span:nth-child(3) {
    background: var(--secondary);
    animation-delay: 0.3s;
  }

  .bar-loader span:nth-child(4) {
    background: color-mix(in srgb, var(--secondary), var(--accent));
    animation-delay: 0.45s;
  }

  .bar-loader span:nth-child(5) {
    background: var(--accent);
    animation-delay: 0.6s;
  }

  .bar-loader-sm {
    width: 32px;
  }

  .bar-loader-sm span {
    height: 3px;
  }

  .bar-loader-lg {
    width: 64px;
  }

  .bar-loader-lg span {
    height: 6px;
    border-radius: 3px;
  }

  @keyframes bar-slide {
    0%, 100% {
      transform: scaleX(0.3);
      opacity: 0.4;
    }
    50% {
      transform: scaleX(1.0);
      opacity: 1;
    }
  }

  /* ==================== Vertical Bar Loader ==================== */

  .bar-loader-vertical {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    height: 48px;
  }

  .bar-loader-vertical span {
    width: 4px;
    height: 80%;
    border-radius: 2px;
    animation: bar-slide-vertical 3.0s ease-in-out infinite;
  }

  .bar-loader-vertical span:nth-child(1) {
    background: var(--primary);
    animation-delay: 0s;
  }

  .bar-loader-vertical span:nth-child(2) {
    background: color-mix(in srgb, var(--primary), var(--secondary));
    animation-delay: 0.15s;
  }

  .bar-loader-vertical span:nth-child(3) {
    background: var(--secondary);
    animation-delay: 0.3s;
  }

  .bar-loader-vertical span:nth-child(4) {
    background: color-mix(in srgb, var(--secondary), var(--accent));
    animation-delay: 0.45s;
  }

  .bar-loader-vertical span:nth-child(5) {
    background: var(--accent);
    animation-delay: 0.6s;
  }

  .bar-loader-vertical-sm {
    height: 32px;
  }

  .bar-loader-vertical-sm span {
    width: 3px;
  }

  .bar-loader-vertical-lg {
    height: 64px;
  }

  .bar-loader-vertical-lg span {
    width: 6px;
    border-radius: 3px;
  }

  @keyframes bar-slide-vertical {
    0%, 100% {
      transform: scaleY(0.3);
      opacity: 0.4;
    }
    50% {
      transform: scaleY(1.0);
      opacity: 1;
    }
  }

  /* ==================== Demo Layout ==================== */

  .demo-row {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid color-mix(in srgb, var(--border) 40%, transparent);
  }

  .demo-label {
    min-width: 140px;
    font-size: 0.85rem;
    color: var(--muted-foreground);
  }

  .demo-area {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .demo-skeleton-card {
    width: 280px;
  }

  .demo-centered {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0;
  }
</style>
