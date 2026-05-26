<script>
  import './theme.css';
  import { onMount, tick } from 'svelte';
  import IconInfoCircle from '@tabler/icons-svelte-runes/icons/info-circle';
  import IconUsers from '@tabler/icons-svelte-runes/icons/users';
  import IconHome from '@tabler/icons-svelte-runes/icons/home';
  import IconPencil from '@tabler/icons-svelte-runes/icons/pencil';
  import IconMail from '@tabler/icons-svelte-runes/icons/mail';
  import IconPackage from '@tabler/icons-svelte-runes/icons/package';
  import IconSearch from '@tabler/icons-svelte-runes/icons/search';
  import IconCirclePlus from '@tabler/icons-svelte-runes/icons/circle-plus';
  import IconCircleX from '@tabler/icons-svelte-runes/icons/circle-x';
  import IconArrowRight from '@tabler/icons-svelte-runes/icons/arrow-right';
  import IconUser from '@tabler/icons-svelte-runes/icons/user';
  import IconAlertCircle from '@tabler/icons-svelte-runes/icons/alert-circle';
  import IconCircleCheck from '@tabler/icons-svelte-runes/icons/circle-check';
  import IconAlertTriangle from '@tabler/icons-svelte-runes/icons/alert-triangle';
  import IconBell from '@tabler/icons-svelte-runes/icons/bell';
  import IconSettings from '@tabler/icons-svelte-runes/icons/settings';

  let dark = $state(false);

  function toggle() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
  }

  onMount(async () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dark = true;
      document.documentElement.classList.add('dark');
    }

    const loadScript = (src) => new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });

    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js');

    await tick();

    Prism.highlightAll();

    for (const pre of document.querySelectorAll('pre')) {
      pre.removeAttribute('style');
    }

    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', () => {
      Prism.highlightAll();
      for (const pre of document.querySelectorAll('pre')) {
        pre.removeAttribute('style');
      }
    });
  });
</script>

<div class="container">
  <h1>Icons — Tabler Icons</h1>
  <p class="subtitle">Open source icon library (MIT license) — <a href="https://tabler.io/icons">tabler.io/icons</a></p>

  <div class="toolbar">
    <button class="btn btn-primary" onclick={toggle}>
      {dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
    <a href="../style/" class="back-link">← Back to style guide</a>
    <a href="../prism/" class="back-link">Code highlighting (Prism) →</a>
  </div>

  <div class="instructions instructions-info">
    <strong>Library:</strong> <a href="https://github.com/tabler/tabler-icons">Tabler Icons</a> — 6146+ free MIT-licensed SVG icons. Used via <code>@tabler/icons-svelte-runes</code> for Svelte 5.
  </div>

  <h2>Weights</h2>
  <p class="muted">Tabler Icons come in multiple weights: <code>outline</code> (default) and <code>filled</code>.</p>

  <h3>Outline vs Fill</h3>
  <div class="icon-weights">
    <div class="icon-weight-cell">
      <IconInfoCircle size={32} />
      <span>outline</span>
    </div>
    <div class="icon-weight-cell">
      <IconInfoCircle size={32} type="filled" />
      <span>filled</span>
    </div>
  </div>

  <h2>Sizes</h2>
  <div class="icon-sizes">
    <div class="icon-size-cell">
      <IconInfoCircle size={12} />
      <span>12px</span>
    </div>
    <div class="icon-size-cell">
      <IconInfoCircle size={16} />
      <span>16px</span>
    </div>
    <div class="icon-size-cell">
      <IconInfoCircle size={24} />
      <span>24px</span>
    </div>
    <div class="icon-size-cell">
      <IconInfoCircle size={32} />
      <span>32px</span>
    </div>
    <div class="icon-size-cell">
      <IconInfoCircle size={48} />
      <span>48px</span>
    </div>
  </div>

  <h2>Colors</h2>
  <p class="muted">Icons accept a <code>color</code> prop and can be styled with any CSS color variable.</p>
  <div class="icon-colors">
    <div class="icon-color-cell">
      <IconUsers size={24} color="var(--primary)" />
      <span>primary</span>
    </div>
    <div class="icon-color-cell">
      <IconUsers size={24} color="var(--secondary)" />
      <span>secondary</span>
    </div>
    <div class="icon-color-cell">
      <IconUsers size={24} color="var(--accent)" />
      <span>accent</span>
    </div>
    <div class="icon-color-cell">
      <IconUsers size={24} color="var(--success)" />
      <span>success</span>
    </div>
    <div class="icon-color-cell">
      <IconUsers size={24} color="var(--warning)" />
      <span>warning</span>
    </div>
    <div class="icon-color-cell">
      <IconUsers size={24} color="var(--destructive)" />
      <span>error</span>
    </div>
  </div>

  <h2>Stroke Width</h2>
  <p class="muted">Tabler Icons support adjustable stroke widths from 0.5 to 3.</p>
  <div class="icon-stroke">
    <div class="icon-stroke-cell">
      <IconInfoCircle size={32} stroke={0.5} />
      <span>0.5</span>
    </div>
    <div class="icon-stroke-cell">
      <IconInfoCircle size={32} stroke={1} />
      <span>1</span>
    </div>
    <div class="icon-stroke-cell">
      <IconInfoCircle size={32} stroke={1.5} />
      <span>1.5</span>
    </div>
    <div class="icon-stroke-cell">
      <IconInfoCircle size={32} stroke={2} />
      <span>2 (default)</span>
    </div>
    <div class="icon-stroke-cell">
      <IconInfoCircle size={32} stroke={2.5} />
      <span>2.5</span>
    </div>
    <div class="icon-stroke-cell">
      <IconInfoCircle size={32} stroke={3} />
      <span>3</span>
    </div>
  </div>

  <h2>Icon Samples</h2>
  <p class="muted">A selection of commonly used icons from the library.</p>

  <h3>UI & Navigation</h3>
  <div class="icon-grid">
    <div class="icon-cell">
      <IconHome size={24} />
      <span class="icon-name">home</span>
    </div>
    <div class="icon-cell">
      <IconPencil size={24} />
      <span class="icon-name">pencil</span>
    </div>
    <div class="icon-cell">
      <IconMail size={24} />
      <span class="icon-name">mail</span>
    </div>
    <div class="icon-cell">
      <IconPackage size={24} />
      <span class="icon-name">package</span>
    </div>
    <div class="icon-cell">
      <IconSearch size={24} />
      <span class="icon-name">search</span>
    </div>
    <div class="icon-cell">
      <IconCirclePlus size={24} />
      <span class="icon-name">circle-plus</span>
    </div>
    <div class="icon-cell">
      <IconInfoCircle size={24} />
      <span class="icon-name">info-circle</span>
    </div>
    <div class="icon-cell">
      <IconCircleX size={24} />
      <span class="icon-name">circle-x</span>
    </div>
  </div>

  <h3>Actions & Status</h3>
  <div class="icon-grid">
    <div class="icon-cell">
      <IconSearch size={24} />
      <span class="icon-name">search</span>
    </div>
    <div class="icon-cell">
      <IconArrowRight size={24} />
      <span class="icon-name">arrow-right</span>
    </div>
    <div class="icon-cell">
      <IconUser size={24} />
      <span class="icon-name">user</span>
    </div>
    <div class="icon-cell">
      <IconAlertCircle size={24} />
      <span class="icon-name">alert-circle</span>
    </div>
    <div class="icon-cell">
      <IconCircleCheck size={24} />
      <span class="icon-name">circle-check</span>
    </div>
    <div class="icon-cell">
      <IconAlertTriangle size={24} />
      <span class="icon-name">alert-triangle</span>
    </div>
    <div class="icon-cell">
      <IconBell size={24} />
      <span class="icon-name">bell</span>
    </div>
    <div class="icon-cell">
      <IconSettings size={24} />
      <span class="icon-name">settings</span>
    </div>
  </div>

  <h2>Usage</h2>

  <h3>Svelte 5</h3>
  <pre><code class="language-html">npm install @tabler/icons-svelte-runes

&lt;script&gt;
  import IconHeart from '@tabler/icons-svelte-runes/icons/heart';
&lt;/script&gt;

&lt;IconHeart size={24} stroke={2} /&gt;</code></pre>

  <h2>License</h2>

  <table>
    <thead>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>License</td>
      <td><a href="https://opensource.org/licenses/MIT">MIT</a></td>
    </tr>
    <tr>
      <td>Repository</td>
      <td><a href="https://github.com/tabler/tabler-icons">github.com/tabler/tabler-icons</a></td>
    </tr>
    <tr>
      <td>Icon count</td>
      <td>6146+ (outline + filled)</td>
    </tr>
    <tr>
      <td>Format</td>
      <td>SVG (inline), icon font (optional)</td>
    </tr>
    <tr>
      <td>Grid</td>
      <td>24×24, 2px stroke default</td>
    </tr>
    </tbody>
  </table>

  <p class="dim" style="margin-top: 1rem;">Icons from <a href="https://tabler.io/icons">Tabler Icons</a> — MIT licensed</p>
</div>

<style>
  .container {
    max-width: 900px;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }

  h2 {
    font-size: 1.3rem;
    margin: 2rem 0 0.75rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid;
    border-image: var(--gradient) 1;
    color: var(--secondary);
    position: relative;
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

  h3 {
    font-size: 1.1rem;
    margin: 1.5rem 0 0.5rem;
    color: var(--accent);
  }

  .subtitle {
    color: var(--muted-foreground);
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

  .btn {
    display: inline-block;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-family: 'Source Serif 4', 'Roboto Slab', serif;
  }

  .btn-primary {
    background: rgba(188, 0, 129, 0.15);
    color: var(--primary);
    border-color: var(--primary);
  }

  .btn-primary:hover {
    background: rgba(188, 0, 129, 0.3);
  }

  .muted {
    color: var(--muted-foreground);
  }

  .dim {
    color: var(--muted-foreground);
    opacity: 0.7;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    color: var(--secondary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    font-family: 'Source Code Pro', monospace;
    background: var(--input);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--secondary);
  }

  pre {
    background: var(--input);
    color: var(--foreground);
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 0.5rem 0;
    border: 1px solid var(--border);
  }

  pre code {
    background: none;
    padding: 0;
    color: inherit;
  }

  :global(.token.comment),
  :global(.token.cdata) {
    color: var(--muted-foreground) !important;
  }

  :global(.token.prolog),
  :global(.token.doctype),
  :global(.token.string),
  :global(.token.char),
  :global(.token.attr-value),
  :global(.token.number),
  :global(.token.boolean) {
    color: var(--success) !important;
  }

  :global(.token.keyword),
  :global(.token.module),
  :global(.token.control),
  :global(.token.function),
  :global(.token.function-name),
  :global(.token.function-variable) {
    color: var(--primary) !important;
  }

  :global(.token.operator),
  :global(.token.punctuation),
  :global(.token.url),
  :global(.token.deleted) {
    color: var(--destructive) !important;
  }

  :global(.token.property),
  :global(.token.variable),
  :global(.token.symbol),
  :global(.token.attr-name),
  :global(.token.namespace) {
    color: var(--secondary) !important;
  }

  :global(.token.tag) {
    color: var(--primary) !important;
  }

  :global(.token.constant),
  :global(.token.class-name),
  :global(.token.builtin) {
    color: var(--accent) !important;
  }

  :global(.token.selector),
  :global(.token.atrule) {
    color: var(--primary) !important;
  }

  :global(.token.entity),
  :global(.token.regex),
  :global(.token.important) {
    color: var(--warning) !important;
  }

  :global(.token.inserted) {
    color: var(--success) !important;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.5rem 0;
  }

  table th,
  table td {
    text-align: left;
    padding: 10px 14px;
    border-bottom: 1px solid color-mix(in srgb, var(--border) 40%, transparent);
  }

  table th {
    color: var(--muted-foreground);
    font-weight: 600;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .instructions {
    background: var(--card);
    padding: 1rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    border-left: 3px solid var(--primary);
    font-size: 0.9rem;
  }

  .instructions-info {
    border-left-color: var(--secondary);
  }

  /* Icon grid */
  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
  }

  .icon-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem;
    background: var(--card);
    border-radius: 5px;
    border: 1px solid var(--border);
  }

  .icon-cell .icon-name {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.7rem;
    color: var(--muted-foreground);
    text-align: center;
    word-break: break-all;
  }

  /* Icon sizes demo */
  .icon-sizes {
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .icon-size-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .icon-size-cell span {
    font-size: 0.7rem;
    color: var(--muted-foreground);
    font-family: 'Source Code Pro', monospace;
  }

  /* Icon weights demo */
  .icon-weights {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .icon-weight-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .icon-weight-cell span {
    font-size: 0.7rem;
    color: var(--muted-foreground);
    font-family: 'Source Code Pro', monospace;
  }

  /* Icon colors demo */
  .icon-colors {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .icon-color-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .icon-color-cell span {
    font-size: 0.7rem;
    color: var(--muted-foreground);
    font-family: 'Source Code Pro', monospace;
  }

  /* Icon stroke demo */
  .icon-stroke {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .icon-stroke-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .icon-stroke-cell span {
    font-size: 0.7rem;
    color: var(--muted-foreground);
    font-family: 'Source Code Pro', monospace;
  }
</style>
