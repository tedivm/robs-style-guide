<script>
  import './theme.css';
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import Badge from './Badge.svelte';
  import Alert from './Alert.svelte';
  import Progress from './Progress.svelte';

  let dark = $state(false);
  let colors = $state([]);

  function resolveHex(variable) {
    const el = document.createElement('div');
    el.style.color = `var(${variable})`;
    document.body.appendChild(el);
    const computed = getComputedStyle(el).color;
    document.body.removeChild(el);
    const m = computed.match(/rgba?\(([^)]+)\)/);
    if (!m) return computed;
    const parts = m[1].split(',').map(s => s.trim());
    return '#' + parts.slice(0, 3).map(v => parseInt(v).toString(16).padStart(2, '0')).join('');
  }

  function refreshColors() {
    colors = [
      { variable: '--background', name: 'Background' },
      { variable: '--card', name: 'Surface / Cards' },
      { variable: '--input', name: 'Code blocks / Inputs' },
      { variable: '--border', name: 'Borders / Dividers' },
      { variable: '--primary', name: 'Primary (pink)' },
      { variable: '--secondary', name: 'Secondary (purple)' },
      { variable: '--accent', name: 'Tertiary (cyan)' },
      { variable: '--foreground', name: 'Body text' },
      { variable: '--muted-foreground', name: 'Muted text' },
      { variable: '--muted', name: 'Muted background' },
      { variable: '--success', name: 'Success' },
      { variable: '--warning', name: 'Warning' },
      { variable: '--destructive', name: 'Error' },
    ].map(c => ({ ...c, hex: resolveHex(c.variable) }));
  }

  function toggle() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
    setTimeout(refreshColors, 50);
  }

  onMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dark = true;
      document.documentElement.classList.add('dark');
    }
    setTimeout(refreshColors, 50);
  });
</script>

<div class="container">
  <h1>Style Guide — Svelte (shadcn)</h1>
  <p class="subtitle">CSS variable theme based on Rob's core design system</p>

  <div class="toolbar">
    <Button onclick={toggle}>
      {dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </Button>
    <a href="../" class="back-link">← Back to style guide</a>
  </div>

  <h2>Colors</h2>
  {#each colors as c}
    <div class="color-row">
      <div class="swatch" style="background: {c.hex}"></div>
      <span class="color-label">{c.hex}</span>
      <span class="color-name">{c.name}</span>
    </div>
  {/each}

  <h2>Buttons</h2>
  <div class="flex-wrap">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
  <div class="flex-wrap" style="margin-top: 0.5rem">
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
  </div>

  <h2>Badges</h2>
  <div class="flex-wrap">
    <Badge>Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="accent">Accent</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
  </div>

  <h2>Cards</h2>
  <div class="grid-2">
    <Card>
      <div slot="header">Card Title</div>
      <div slot="body">Card body text. Uses <code>var(--card)</code> and <code>var(--card-foreground)</code>.</div>
    </Card>
    <Card>
      <div slot="header">Another Card</div>
      <div slot="body">
        <div class="flex-wrap">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="accent">Accent</Badge>
        </div>
      </div>
    </Card>
  </div>

  <h2>Alerts</h2>
  <div class="space-y">
    <Alert>Default alert with standard styling.</Alert>
    <Alert variant="destructive">Error or critical issues.</Alert>
    <Alert variant="success">Confirmation or positive feedback.</Alert>
    <Alert variant="warning">Cautionary messages.</Alert>
  </div>

  <h2>Forms</h2>
  <div class="form-group">
    <label for="demo-text">Text input</label>
    <input id="demo-text" type="text" class="input" placeholder="Enter text..." />
  </div>
  <div class="form-group">
    <label for="demo-select">Select</label>
    <select id="demo-select" class="input">
      <option>Option one</option>
      <option>Option two</option>
      <option>Option three</option>
    </select>
  </div>
  <div class="form-group">
    <label for="demo-textarea">Textarea</label>
    <textarea id="demo-textarea" class="textarea" placeholder="Enter multiline text..."></textarea>
  </div>

  <h2>Progress Bars</h2>
  <div class="space-y">
    <Progress value={25} color="primary" />
    <Progress value={50} color="secondary" />
    <Progress value={75} color="accent" />
    <Progress value={100} color="success" />
  </div>

  <h2>Typography</h2>
  <p>
    <span class="text-primary">Primary (pink)</span><br>
    <span class="text-secondary">Secondary (purple)</span><br>
    <span class="text-accent">Accent (cyan)</span><br>
    <span class="text-success">Success</span><br>
    <span class="text-warning">Warning</span><br>
    <span class="text-destructive">Destructive</span>
  </p>
  <p>
    <span class="text-sm">Small text (0.85rem)</span><br>
    <span class="text-xs">Extra small text (0.75rem)</span><br>
    <span class="font-mono">Monospace text</span>
  </p>
  <p class="muted">Muted text using <code>var(--muted-foreground)</code>.</p>

  <hr>
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
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--border);
    color: var(--secondary);
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
    width: 40px;
    height: 40px;
    border-radius: 4px;
    vertical-align: middle;
    margin-right: 8px;
    border: 1px solid var(--border);
  }

  .color-row {
    display: flex;
    align-items: center;
    margin: 0.4rem 0;
  }

  .color-label {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.85rem;
    min-width: 120px;
    color: var(--foreground);
  }

  .color-name {
    color: var(--foreground);
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

  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 1.5rem 0;
  }
</style>