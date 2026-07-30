# Claude Counter ✨

> A premium browser extension that displays real-time token count, cache timer, and usage tracking on [claude.ai](https://claude.ai) — with a beautiful glassmorphic design.

![Claude Counter screenshot](./screenshot.png?v=3)

## ✨ Features

- **🔢 Token Counter** — Real-time approximate token count for your current conversation, with a sleek progress bar against the 200k context limit
- **⏱️ Cache Timer** — Live countdown showing how long your conversation stays cached (cheaper to continue)
- **📊 Usage Bars** — Session (5-hour) and weekly (7-day) usage from Claude's native API, with precise progress bars and reset countdowns
- **🎨 Premium Design** — Glassmorphic UI with smooth animations, dark/light mode support, and modern aesthetics
- **🔒 Privacy First** — All data stays local. No external servers, no tracking

## 🚀 Installation

### ⬇️ Direct Download

> **[📦 Download claude-token-counter.zip](https://github.com/amanji0/Claude-token-counter/raw/main/claude-token-counter.zip)**

### Chrome / Edge / Chromium

1. **[Download the zip](https://github.com/amanji0/Claude-token-counter/raw/main/claude-token-counter.zip)** and extract it
2. Go to `chrome://extensions` and enable **Developer mode**
3. Click **Load unpacked** and select the extracted folder

### Firefox

1. Download the latest `.xpi` file
2. Drag it into any Firefox window and click **Add**

### From Source

```bash
git clone https://github.com/amanji0/Claude-token-counter.git
```
Then load as unpacked extension in your browser.

## 🛠️ How It Works

- **API Interception** — Hooks into Claude's fetch API to read conversation data and usage info in real-time
- **Smart Tokenization** — Uses a vendored `o200k_base` tokenizer for accurate approximate token counting
- **Live SSE Data** — Captures `message_limit` events from Claude's streaming responses for precise usage fractions
- **DOM Integration** — Seamlessly injects UI elements that blend with Claude's native interface
- **Intelligent Caching** — Caches token counts per message with content fingerprinting to avoid redundant computation

## 🔐 Privacy

- All data stays local — no external servers, no tracking
- Reads your `lastActiveOrg` cookie only to query Claude's own `/usage` endpoint
- Makes requests only to `claude.ai`
- No data is stored beyond the current session

## 🎨 Design

Claude Counter features a modern glassmorphic design with:
- Frosted glass backdrop effects
- Smooth micro-animations and transitions
- Automatic dark/light mode detection
- Premium color palette with indigo/violet gradients
- Responsive layout that adapts to Claude's interface

## 📦 Tech Stack

- **Manifest V3** — Modern Chrome extension API
- **Vanilla JS** — Zero dependencies, minimal footprint
- **CSS Custom Properties** — Dynamic theming with CSS variables
- **gpt-tokenizer** — Vendored o200k_base encoding for token counting

## 🙏 Credits

- Token counting via [gpt-tokenizer](https://github.com/niieani/gpt-tokenizer) (MIT)
- Inspired by [Claude Usage Tracker](https://github.com/lugia19/Claude-Usage-Extension) by lugia19
- Design inspired by [claude-counter](https://github.com/she-llac/claude-counter)

## 📄 License

MIT — see [LICENSE](./LICENSE) for details.

---

<p align="center">
  Made with ❤️ for the Claude community
</p>
