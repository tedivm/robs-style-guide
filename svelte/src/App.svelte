<script>
  import './theme.css';
  import { onMount, tick } from 'svelte';
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import Badge from './Badge.svelte';
  import Alert from './Alert.svelte';
  import Progress from './Progress.svelte';
  import GradientProgress from './GradientProgress.svelte';
  import IconSun from '@tabler/icons-svelte-runes/icons/sun';
  import IconMoon from '@tabler/icons-svelte-runes/icons/moon';

  let dark = $state(false);

  const colors = [
    { name: 'Background', dark: '#150d1e', light: '#f5f1fc' },
    { name: 'Surface / Cards', dark: '#1a1130', light: '#e9e0f7' },
    { name: 'Code blocks / Inputs', dark: '#0f0a1a', light: '#eee5f9' },
    { name: 'Borders / Dividers', dark: '#3d2b5a', light: '#d4c2ec' },
    { name: 'Primary (pink)', dark: '#bc0081', light: '#bc0081' },
    { name: 'Secondary (purple)', dark: '#6020c0', light: '#6020c0' },
    { name: 'Tertiary (cyan)', dark: '#005cb5', light: '#005cb5' },
    { name: 'Body text', dark: '#dcdcdc', light: '#1d152a' },
    { name: 'Muted text', dark: '#b4b4b4', light: '#5e546d' },
    { name: 'Dim text', dark: '#999', light: '#756a87' },
    { name: 'Success', dark: '#50c878', light: '#50c878' },
    { name: 'Warning', dark: '#ffbe32', light: '#ffbe32' },
    { name: 'Error', dark: '#ee343b', light: '#ee343b' },
  ];

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
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js');

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
  <h1>Style Guide — Svelte (shadcn)</h1>
  <p class="subtitle">CSS variable theme based on Rob's core design system</p>

  <div class="toolbar">
    <Button icon variant="primary" onclick={toggle} title={dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}>
      {#if dark}
        <IconSun size={18} />
      {:else}
        <IconMoon size={18} />
      {/if}
    </Button>
    <a href="../../" class="back-link">← Home</a>
    <a href="../prism/" class="back-link">Code highlighting →</a>
    <a href="../icons/" class="back-link">Icons →</a>
  </div>

  <h2>Colors</h2>
  <table class="color-table">
    <thead>
      <tr>
        <th>Color</th>
        <th>Dark Mode</th>
        <th>Light Mode</th>
      </tr>
    </thead>
    <tbody>
      {#each colors as c}
        <tr>
          <td>{c.name}</td>
          <td><span class="color-cell"><span class="swatch" style="background: {c.dark}"></span><span class="color-hex">{c.dark}</span></span></td>
          <td><span class="color-cell"><span class="swatch" style="background: {c.light}"></span><span class="color-hex">{c.light}</span></span></td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h2>Typography</h2>

  <div class="instructions instructions-info">
    <strong>Fonts:</strong> <code>Source Serif 4</code> (body, primary) / <code>Roboto Slab</code> (body, fallback). <code>Source Code Pro</code> (monospace, primary) / <code>Roboto Mono</code> (monospace, fallback). All loaded from Google Fonts CDN, self-hostable.
  </div>

  <div class="grid-2" style="margin: 1rem 0;">
    <Card>
      <div slot="header">Source Serif 4</div>
      <div slot="body">
        <div class="font-specimen">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div class="font-specimen">abcdefghijklmnopqrstuvwxyz</div>
        <div class="font-specimen">0123456789</div>
      </div>
    </Card>
    <Card>
      <div slot="header">Roboto Slab</div>
      <div slot="body">
        <div class="font-specimen" style="font-family: 'Roboto Slab', serif;">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div class="font-specimen" style="font-family: 'Roboto Slab', serif;">abcdefghijklmnopqrstuvwxyz</div>
        <div class="font-specimen" style="font-family: 'Roboto Slab', serif;">0123456789</div>
      </div>
    </Card>
    <Card>
      <div slot="header">Source Code Pro</div>
      <div slot="body">
        <div class="font-specimen" style="font-family: 'Source Code Pro', monospace;">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div class="font-specimen" style="font-family: 'Source Code Pro', monospace;">abcdefghijklmnopqrstuvwxyz</div>
        <div class="font-specimen" style="font-family: 'Source Code Pro', monospace;">0123456789</div>
      </div>
    </Card>
    <Card>
      <div slot="header">Roboto Mono</div>
      <div slot="body">
        <div class="font-specimen" style="font-family: 'Roboto Mono', monospace;">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div class="font-specimen" style="font-family: 'Roboto Mono', monospace;">abcdefghijklmnopqrstuvwxyz</div>
        <div class="font-specimen" style="font-family: 'Roboto Mono', monospace;">0123456789</div>
      </div>
    </Card>
  </div>

  <h1>Heading 1 — Primary pink</h1>
  <p class="muted">Used for page titles. Includes glow text-shadow.</p>

  <h2>Heading 2 — Purple with underline</h2>
  <p class="muted">Used for section headers. Bottom border divider.</p>

  <h3>Heading 3 — Cyan</h3>
  <p class="muted">Used for subsections.</p>

  <h4>Heading 4 — Body color</h4>
  <p class="muted">Minor section headers.</p>

  <h5>Heading 5 — Cyan uppercase</h5>
  <p class="muted">Small labels, uppercase with letter-spacing.</p>

  <h6>Heading 6 — Muted uppercase</h6>
  <p class="muted">Smallest labels.</p>

  <p>This is a standard paragraph. Body font: <code>Source Serif 4</code> with <code>Roboto Slab</code> fallback. Monospace: <code>Source Code Pro, Roboto Mono</code>.</p>

  <p class="muted">This is muted text using the <code>.muted</code> class.</p>
  <p class="dim">This is dim text using the <code>.dim</code> class.</p>

  <p>
    <span class="text-primary">Colored text: pink</span><br>
    <span class="text-secondary">Colored text: purple</span><br>
    <span class="text-accent">Colored text: cyan</span><br>
    <span class="text-success">Colored text: success</span><br>
    <span class="text-warning">Colored text: warning</span><br>
    <span class="text-destructive">Colored text: error</span>
  </p>

  <p>
    <span class="text-sm">Small text (0.85rem)</span><br>
    <span class="text-xs">Extra small text (0.75rem)</span>
  </p>

  <p>
    <span class="font-bold">Bold text</span><br>
    <span class="uppercase">Uppercase with letter-spacing</span><br>
    <span class="font-mono">Monospace text</span>
  </p>

  <p>
    This paragraph contains <a href="#">inline links</a>, <code>inline code</code>, <span class="url">URL-style code</span>, <span class="tooltip" data-tip="This is a tooltip">tooltips</span>, and <span class="kbd">keyboard shortcuts</span>.
  </p>

  <h2>Links</h2>

  <p>
    Standard link: <a href="#">Default purple link</a><br>
    Hover state: <a href="#">Links get underline on hover</a>
  </p>

  <h2>Inline Elements</h2>

  <p>
    <code>Inline code</code> — dark purple background, purple text.<br>
    <span class="url">URL-style code</span> — monospace with tighter padding.<br>
    <span class="kbd">Ctrl</span> + <span class="kbd">C</span> — keyboard keys.<br>
    <span class="tooltip" data-tip="Hover for tooltip">Tooltip text</span> — dotted underline, hover for tooltip.<br>
    <span class="truncate" style="display: inline-block; max-width: 200px; border-bottom: 1px solid var(--card);">This is truncated text that gets ellipsis</span> — text truncation.
  </p>

  <h2>Badges</h2>

  <div class="flex-wrap">
    <Badge>Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="accent">Accent</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="gradient">Gradient</Badge>
  </div>

  <h2>Tags</h2>

  <div class="flex-wrap">
    <span class="tag">v1.0.0</span>
    <span class="tag">production</span>
    <span class="tag">docker</span>
    <span class="tag">traefik</span>
    <span class="tag">nginx</span>
    <span class="tag">internal</span>
  </div>

  <h2>Status Indicators</h2>

  <div class="flex-wrap">
    <span><span class="status-dot status-online"></span>Online</span><br>
    <span><span class="status-dot status-offline"></span>Offline</span><br>
    <span><span class="status-dot status-warn"></span>Degraded</span>
  </div>

  <h2>Buttons</h2>

  <div class="flex-wrap">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button variant="gradient">Gradient</Button>
  </div>

  <div class="flex-wrap" style="margin-top: 0.5rem">
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
  </div>

  <h2>Alert Boxes</h2>
  <div class="space-y">
    <Alert>
      <strong>Default (pink border)</strong> — General instructions or important notes.
    </Alert>
    <Alert variant="secondary">
      <strong>Info (purple border)</strong> — Informational messages.
    </Alert>
    <Alert variant="success">
      <strong>Success (green border)</strong> — Confirmation or positive feedback.
    </Alert>
    <Alert variant="warning">
      <strong>Warning (amber border)</strong> — Cautionary messages.
    </Alert>
    <Alert variant="destructive">
      <strong>Error (red border)</strong> — Errors or critical issues.
    </Alert>
  </div>

  <h2>Blockquote</h2>

  <blockquote>
    This is a blockquote. It has a pink left border and dark background, similar to the instructions box but with italic text.
  </blockquote>

  <h2>Code Blocks</h2>

  <pre><code class="language-json">&#123;
  "mcpServers": &#123;
    "wikipedia": &#123;
      "url": "https://example.com/mcp"
    &#125;
  &#125;
&#125;</code></pre>

  <pre><code class="language-bash">#!/usr/bin/env bash
set -euo pipefail
echo "Hello, world!"</code></pre>

  <h2>Lists</h2>

  <h3>Unordered</h3>
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item with <code>inline code</code> and <a href="#">a link</a></li>
    <li>Nested list:
      <ul>
        <li>Nested A</li>
        <li>Nested B</li>
      </ul>
    </li>
  </ul>

  <h3>Ordered</h3>
  <ol>
    <li>Step one</li>
    <li>Step two</li>
    <li>Step three</li>
  </ol>

  <h2>Tables</h2>

  <table>
    <thead>
      <tr>
        <th>Subdomain</th>
        <th>Service</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="#">example</a></td>
        <td>Example Service</td>
        <td>A demonstration of table rows</td>
        <td><span><span class="status-dot status-online"></span>Running</span></td>
      </tr>
      <tr>
        <td><a href="#">another</a></td>
        <td>Another Service</td>
        <td>With <code>inline code</code> and <Badge variant="secondary">badges</Badge></td>
        <td><span><span class="status-dot status-warn"></span>Degraded</span></td>
      </tr>
    </tbody>
  </table>

  <h2>Cards</h2>

  <div class="grid-2">
    <Card>
      <div slot="header">Card Title</div>
      <div slot="body">Card body text goes here. Cards have a surface background with a border.</div>
    </Card>
    <Card>
      <div slot="header">Another Card</div>
      <div slot="body">Cards can contain <a href="#">links</a>, <code>code</code>, <Badge variant="success">badges</Badge>, and other elements.</div>
    </Card>
  </div>

  <h2>Progress Bars</h2>
  <div class="space-y">
    <Progress value={25} color="primary" />
    <Progress value={50} color="accent" />
    <Progress value={75} color="secondary" />
    <Progress value={100} color="success" />
  </div>

  <h2>Gradient Progress Bars</h2>
  <div class="space-y">
    <GradientProgress value={25} />
    <GradientProgress value={50} />
    <GradientProgress value={75} />
    <GradientProgress value={100} />
  </div>

  <h2>Reverse Gradient Progress Bars</h2>
  <div class="space-y">
    <GradientProgress value={25} reverse={true} />
    <GradientProgress value={50} reverse={true} />
    <GradientProgress value={75} reverse={true} />
    <GradientProgress value={100} reverse={true} />
  </div>

  <h2>Forms</h2>

  <label for="demo-text">Text input</label>
  <input id="demo-text" type="text" class="input" placeholder="Enter text..." />

  <label for="demo-pass">Password input</label>
  <input id="demo-pass" type="password" class="input" placeholder="Enter password..." />

  <label for="demo-select">Select</label>
  <select id="demo-select" class="input">
    <option>Option one</option>
    <option>Option two</option>
    <option>Option three</option>
  </select>

  <label for="demo-textarea">Textarea</label>
  <textarea id="demo-textarea" class="textarea" placeholder="Enter multiline text..."></textarea>

  <h2>Tool Cards</h2>

  <div class="tool">
    <span class="tool-name">search_articles</span>
    <span class="tool-desc">— Search Wikipedia articles by keyword. Returns a list of matching article titles with relevance scores.</span>
  </div>

  <div class="tool">
    <span class="tool-name">get_article</span>
    <span class="tool-desc">— Get the full text of a Wikipedia article by its exact title.</span>
  </div>

  <h2>Config Sections</h2>

  <div class="config-section">
    <h3>Example Config</h3>
    <p class="config-path">~/.config/example/config.json</p>
    <pre><code class="language-json">&#123;
  "key": "value",
  "nested": &#123;
    "enabled": true
  &#125;
&#125;</code></pre>
  </div>

  <h2>Horizontal Rule</h2>

  <hr>

  <h2>Reverse Horizontal Rule</h2>

  <hr class="reverse">

  <p class="dim" style="margin-top: 1rem;">End of Svelte theme demo.</p>
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
    border-image: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent)) 1;
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
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    filter: blur(6px);
    opacity: 0.7;
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

  .swatch {
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    vertical-align: middle;
    margin-right: 6px;
    border: 1px solid var(--border);
  }

  .color-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.5rem 0;
  }

  .color-table th,
  .color-table td {
    text-align: left;
    padding: 10px 14px;
    border-bottom: 1px solid color-mix(in srgb, var(--border) 40%, transparent);
  }

  .color-table th {
    color: var(--muted-foreground);
    font-weight: 600;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .color-cell {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .color-hex {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.85rem;
  }

  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .space-y {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
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

  label {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--muted-foreground);
    font-size: 0.85rem;
  }

  .input {
    background: var(--input);
    border: 1px solid var(--border);
    color: var(--foreground);
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius);
    font-family: inherit;
    font-size: 0.85rem;
    width: 100%;
    max-width: 400px;
  }

  .input:focus {
    outline: none;
    border-color: var(--ring);
  }

  .textarea {
    background: var(--input);
    border: 1px solid var(--border);
    color: var(--foreground);
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius);
    font-family: inherit;
    font-size: 0.85rem;
    width: 100%;
    max-width: 400px;
    min-height: 80px;
    resize: vertical;
  }

  code {
    font-family: 'Source Code Pro', monospace;
    background: var(--input);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--secondary);
  }

  .muted {
    color: var(--muted-foreground);
  }

  .dim {
    color: var(--muted-foreground);
    opacity: 0.7;
  }

  .text-primary { color: var(--primary); }
  .text-secondary { color: var(--secondary); }
  .text-accent { color: var(--accent); }
  .text-success { color: var(--success); }
  .text-warning { color: var(--warning); }
  .text-destructive { color: var(--destructive); }

  .text-sm { font-size: 0.85rem; }
  .text-xs { font-size: 0.75rem; }
  .font-mono { font-family: 'Source Code Pro', monospace; }
  .font-bold { font-weight: 700; }
  .uppercase { text-transform: uppercase; letter-spacing: 0.05em; }

  .font-specimen {
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    margin: 0.25rem 0;
    color: var(--foreground);
  }

  hr {
    border: none;
    height: 1px;
    margin: 1.5rem 0;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    filter: drop-shadow(0 0 6px rgba(188, 0, 129, 0.7)) drop-shadow(0 0 16px rgba(96, 32, 192, 0.4));
  }
  hr.reverse {
    background: linear-gradient(90deg, var(--accent), var(--secondary), var(--primary));
    filter: drop-shadow(0 0 6px rgba(0, 92, 181, 0.7)) drop-shadow(0 0 16px rgba(96, 32, 192, 0.4));
  }

  h3 {
    font-size: 1.1rem;
    margin: 1.5rem 0 0.5rem;
    color: var(--accent);
  }

  h4 {
    font-size: 1rem;
    margin: 1.2rem 0 0.4rem;
    color: var(--foreground);
  }

  h5 {
    font-size: 0.9rem;
    margin: 1rem 0 0.3rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h6 {
    font-size: 0.85rem;
    margin: 1rem 0 0.3rem;
    color: var(--muted-foreground);
    text-transform: uppercase;
    letter-spacing: 0.05em;
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

  .url {
    font-family: 'Source Code Pro', monospace;
    background: var(--card);
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    color: var(--secondary);
  }

  .kbd {
    display: inline-block;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 0.1rem 0.4rem;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.75rem;
    color: var(--foreground);
  }

  .tooltip {
    position: relative;
    border-bottom: 1px dotted var(--secondary);
    cursor: help;
  }

  .tooltip:hover::after {
    content: attr(data-tip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--input);
    color: var(--foreground);
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
    font-size: 0.75rem;
    white-space: nowrap;
    border: 1px solid var(--border);
    z-index: 1;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tag {
    display: inline-block;
    padding: 0.15rem 0.5rem;
    background: var(--card);
    border-radius: 3px;
    font-size: 0.75rem;
    color: var(--muted-foreground);
    margin: 0.1rem;
  }

  .status-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 0.4rem;
  }

  .status-online { background: var(--success); }
  .status-offline { background: var(--destructive); }
  .status-warn { background: var(--warning); }

  blockquote {
    position: relative;
    border-left: 3px solid transparent;
    background: var(--card);
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    color: var(--card-foreground);
    font-style: italic;
  }

  blockquote::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, var(--primary), var(--secondary), var(--accent));
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

  ul, ol {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.25rem 0;
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

  .tool {
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--card);
  }

  .tool-name {
    font-weight: bold;
    font-family: 'Source Code Pro', monospace;
    color: var(--primary);
  }

  .tool-desc {
    color: var(--foreground);
    font-size: 0.9rem;
  }

  .config-section {
    margin: 1.5rem 0;
  }

  .config-path {
    font-size: 0.85rem;
    color: var(--muted-foreground);
    font-family: 'Source Code Pro', monospace;
    margin-bottom: 0.3rem;
  }
</style>