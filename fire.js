// npm install @mendable/firecrawl-js
import FirecrawlApp from "@mendable/firecrawl-js";

const app = new FirecrawlApp({ apiKey: "fc-848de04d0d464e6983debc973ad238e4" });

// Scrape a website:
await app.scrapeUrl("firecrawl.dev");

document.querySelector(
  "#editor > div.flex.flex-1.flex-col.overflow-hidden.pb-2 > div.flex-1.overflow-hidden > div > div > div.overflow-guard > div.monaco-scrollable-element.editor-scrollable.vs-dark > div.lines-content.monaco-editor-background > div.view-lines.monaco-mouse-cursor-text"
);
