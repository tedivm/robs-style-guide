<script>
  import './theme.css';
  import { onMount, tick } from 'svelte';

  let dark = $state(false);

  const examples = [
    { lang: 'json', label: 'JSON', code: `<pre><code class="language-json">{
  "name": "robs-style-guide",
  "version": "1.0.0",
  "theme": {
    "primary": "#bc0081",
    "secondary": "#6020c0",
    "accent": "#005cb5"
  }
}</code></pre>` },
    { lang: 'yaml', label: 'YAML', code: `<pre><code class="language-yaml">version: '3.8'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "9500:80"
    volumes:
      - ./docs:/usr/share/nginx/html:ro
    environment:
      - NODE_ENV=production
      - PORT=80</code></pre>` },
    { lang: 'json5', label: 'JSONC', code: `<pre><code class="language-json5">// VS Code settings for the project
{
  "workbench.colorTheme": "Dark Purple",
  "editor.renderWhitespace": "selection",
  /* Multi-line comment:
     these settings override workspace defaults */
  "files.trimTrailingWhitespace": true
}</code></pre>` },
    { lang: 'javascript', label: 'JavaScript', code: `<pre><code class="language-javascript">import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app')
});

// Detect system theme preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDark.matches) {
  document.documentElement.classList.add('dark');
}

prefersDark.addEventListener('change', (e) => {
  document.documentElement.classList.toggle('dark', e.matches);
});

export default app;</code></pre>` },
    { lang: 'python', label: 'Python', code: `<pre><code class="language-python">import os
import json
from pathlib import Path
from dataclasses import dataclass, asdict

@dataclass
class Config:
    host: str = "0.0.0.0"
    port: int = 8080
    debug: bool = False
    # Theme settings
    colors: dict = None

    def __post_init__(self):
        if self.colors is None:
            self.colors = {
                "primary": "#bc0081",
                "secondary": "#6020c0",
                "accent": "#005cb5"
            }

    def to_json(self) -> str:
        return json.dumps(asdict(self), indent=2)

    @classmethod
    def from_file(cls, path: Path) -> 'Config':
        with open(path) as f:
            return cls(**json.load(f))</code></pre>` },
    { lang: 'go', label: 'Go', code: `<pre><code class="language-go">// Config holds application configuration
type Config struct {
	Host    string            \x60json:"host"\x60
	Port    int               \x60json:"port"\x60
	Debug   bool              \x60json:"debug"\x60
	Colors  map[string]string \x60json:"colors"\x60
}

func main() {
	cfg := Config{
		Host:  "0.0.0.0",
		Port:  8080,
		Debug: false,
		Colors: map[string]string{
			"primary":   "#bc0081",
			"secondary": "#6020c0",
			"accent":    "#005cb5",
		},
	}

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	})

	addr := fmt.Sprintf("%s:%d", cfg.Host, cfg.Port)
	log.Printf("Starting server on %s", addr)
	log.Fatal(http.ListenAndServe(addr, nil))
}</code></pre>` },
    { lang: 'html', label: 'HTML', code: `<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Style Guide&lt;/title&gt;
    &lt;link rel="stylesheet" href="theme.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header class="site-header"&gt;
      &lt;h1&gt;Rob's Style Guide&lt;/h1&gt;
      &lt;nav&gt;
        &lt;a href="#colors"&gt;Colors&lt;/a&gt;
        &lt;a href="#typography"&gt;Typography&lt;/a&gt;
        &lt;a href="#components"&gt;Components&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/header&gt;
    &lt;main id="content"&gt;
      &lt;p&gt;Welcome to the style guide.&lt;/p&gt;
    &lt;/main&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>` },
    { lang: 'xml', label: 'XML', code: `<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt;
  &lt;theme name="dark-purple"&gt;
    &lt;color name="primary" value="#bc0081" /&gt;
    &lt;color name="secondary" value="#6020c0" /&gt;
    &lt;color name="accent" value="#005cb5" /&gt;
    &lt;color name="success" value="#50c878" /&gt;
    &lt;color name="warning" value="#ffbe32" /&gt;
    &lt;color name="error" value="#ee343b" /&gt;
    &lt;typography&gt;
      &lt;body&gt;Source Serif 4, Roboto Slab, serif&lt;/body&gt;
      &lt;monospace&gt;Source Code Pro, Roboto Mono, monospace&lt;/monospace&gt;
    &lt;/typography&gt;
  &lt;/theme&gt;
&lt;/configuration&gt;</code></pre>` },
    { lang: 'diff', label: 'Diff', code: `<pre><code class="language-diff">--- a/docs/index.html
+++ b/docs/index.html
@@ -15,7 +15,7 @@
 :root {
   --bg: #0f0a1a;
   --fg: #e0e0e0;
-  --surface: #2d1b4e;
+  --surface: #1a1130;
   --code: #0f0a1a;
   --code-fg: #e0e0e0;
   --primary: #bc0081;
@@ -25,6 +25,8 @@
   --success: #50c878;
   --warning: #ffbe32;
   --error: #ee343b;
+  --border: #2d1b4e;
+  --radius: 6px;
 }
</style></code></pre>` },
    { lang: 'bash', label: 'Bash', code: `<pre><code class="language-bash">#!/usr/bin/env bash
set -euo pipefail

# Build and serve the style guide
BUILD_DIR="docs"
SVELTE_DIR="svelte"
PORT="\${1:-9500}"

echo "Building Svelte components..."
cd "$SVELTE_DIR"
npm ci
npm run build
cd ..

echo "Starting local server on port $PORT..."
docker run --rm \\
  -p "$PORT:80" \\
  -v "\$(pwd)/$BUILD_DIR:/usr/share/nginx/html:ro" \\
  -v "\$(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf:ro" \\
  nginx:alpine

echo "Done."</code></pre>` },
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

    await Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-yaml.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json5.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-go.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-diff.min.js'),
    ]);

    await tick();

    Prism.highlightAll();

    // Prism injects inline styles on <pre> elements that override our CSS.
    // Strip them so our CSS variables take effect.
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
  <h1>Code Highlighting — Prism</h1>
  <p class="subtitle">Syntax highlighting via Prism.js with our design system palette</p>

  <div class="toolbar">
    <button id="theme-toggle" class="btn btn-primary" onclick={toggle}>
      {dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
    <a href="../style/" class="back-link">← Back to style guide</a>
    <a href="../icons/" class="back-link">Icons →</a>
  </div>

  <h2>Token Mappings</h2>

  <table class="token-table">
    <thead>
      <tr>
        <th>Color</th>
        <th>Token Types</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="swatch" style="background: #bc0081"></span></td>
        <td class="token-list">keyword, module, control, function, function-name, function-variable, tag, selector, atrule</td>
      </tr>
      <tr>
        <td><span class="swatch" style="background: #6020c0"></span></td>
        <td class="token-list">property, variable, symbol, attr-name, namespace</td>
      </tr>
      <tr>
        <td><span class="swatch" style="background: #005cb5"></span></td>
        <td class="token-list">operator, punctuation, url</td>
      </tr>
      <tr>
        <td><span class="swatch" style="background: #50c878"></span></td>
        <td class="token-list">constant, class-name, builtin, inserted</td>
      </tr>
      <tr>
        <td><span class="swatch" style="background: #ffbe32"></span></td>
        <td class="token-list">regex, entity, important</td>
      </tr>
      <tr>
        <td><span class="swatch" style="background: #ee343b"></span></td>
        <td class="token-list">prolog, doctype, string, char, attr-value, number, boolean, deleted</td>
      </tr>
      <tr>
        <td><span class="swatch" style="background: #b4b4b4"></span></td>
        <td class="token-list">comment, cdata</td>
      </tr>
    </tbody>
  </table>

  {#each examples as ex}
    <h2>{ex.label}</h2>
    {@html ex.code}
  {/each}

  <p class="dim" style="margin-top: 1rem;">Powered by <a href="https://prismjs.com">Prism.js</a></p>
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

  .token-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.5rem 0 1.5rem;
    font-size: 0.85rem;
  }

  .token-table th,
  .token-table td {
    text-align: left;
    padding: 8px 12px;
    border-bottom: 1px solid color-mix(in srgb, var(--border) 40%, transparent);
  }

  .token-table th {
    color: var(--secondary);
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .token-table td {
    vertical-align: middle;
  }

  .token-table .swatch {
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 3px;
  }

  .token-table .token-list {
    font-family: 'Source Code Pro', 'Roboto Mono', monospace;
    font-size: 0.8rem;
    color: var(--muted-foreground);
    line-height: 1.6;
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

  .dim {
    color: var(--muted-foreground);
    opacity: 0.7;
  }

  a {
    color: var(--secondary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin: 0.5rem 0;
  }

  :global(pre) {
    background: var(--code) !important;
    color: var(--code-fg) !important;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid var(--border);
    font-size: 0.85rem;
    line-height: 1.5;
    overflow-x: auto;
    margin: 0.5rem 0;
  }

  :global(code) {
    font-family: 'Source Code Pro', 'Roboto Mono', monospace;
    background: var(--code) !important;
    color: var(--code-fg) !important;
  }

  :global(.token.comment),
  :global(.token.prolog),
  :global(.token.cdata) {
    color: var(--muted-foreground) !important;
  }

  :global(.token.doctype),
  :global(.token.string),
  :global(.token.char),
  :global(.token.attr-value),
  :global(.token.number),
  :global(.token.boolean),
  :global(.token.deleted) {
    color: var(--destructive) !important;
  }

  :global(.token.selector),
  :global(.token.keyword),
  :global(.token.module),
  :global(.token.control),
  :global(.token.function),
  :global(.token.function-name),
  :global(.token.function-variable),
  :global(.token.tag) {
    color: var(--primary) !important;
  }

  :global(.token.operator),
  :global(.token.punctuation),
  :global(.token.url) {
    color: var(--accent) !important;
  }

  :global(.token.property),
  :global(.token.variable),
  :global(.token.symbol),
  :global(.token.attr-name),
  :global(.token.namespace) {
    color: var(--secondary) !important;
  }

  :global(.token.constant),
  :global(.token.class-name),
  :global(.token.builtin),
  :global(.token.inserted) {
    color: var(--success) !important;
  }

  :global(.token.regex),
  :global(.token.entity),
  :global(.token.important) {
    color: var(--warning) !important;
  }

  :global(.token.atrule) {
    color: var(--primary) !important;
  }
</style>
