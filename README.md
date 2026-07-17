# La Vie en Rose

La Vie en Rose is a responsive, presentation-focused website for a modern nail
salon. It is built as an Angular 21 LTS single-page application so the current
static experience can grow into online booking, content management, customer
accounts, or other salon features later.

## Current pages

- Home — brand introduction, featured services, gallery preview, and reviews
- Services — grouped service menu and appointment guidance
- Gallery — responsive portfolio layout prepared for final photography
- About — salon story, values, studio, and team
- Contact — contact details, booking-request form, opening hours, and FAQs

Every page uses the same responsive header, footer, typography, colour tokens,
buttons, cards, and spacing system.

## Technology

- Angular 21 LTS
- Standalone components with lazy-loaded routes
- TypeScript in strict mode
- SCSS with shared design tokens
- Angular signals for the small amount of UI state
- Material Symbols Rounded for icons
- Inter and Playfair Display for readable typography

## Requirements

- Node.js 22 is recommended
- npm 10 or newer

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open `http://localhost:4200`. The development server reloads when source files
change.

## Build for production

```bash
npm run build
```

The optimized output is written to `dist/la-vie-en-rose`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yaml` deploys the optimized Angular
application whenever `main` is updated. It can also be started manually from
the repository's **Actions** tab.

Before the first deployment, open **GitHub repository Settings > Pages** and set
**Build and deployment > Source** to **GitHub Actions**. The deployed project URL
is expected to be:

```text
https://hnikolov04.github.io/la-vie-en-rose/
```

The workflow configures the `/la-vie-en-rose/` base path and adds a `404.html`
SPA fallback so routed pages continue to work when opened or refreshed directly.

## Project structure

```text
.agents/                  Project conventions and contributor guidance
.vscode/                  Shared editor settings, tasks, and debug setup
.prettierrc.json           Shared formatting preferences
public/assets/            Public brand and image assets
src/app/core/             Site-wide layout components
src/app/pages/            Lazy-loaded route components
src/app/app.routes.ts     Route definitions and page titles
src/styles.scss           Design tokens and global reusable styles
```

## Adding images and branding

Store all client-provided assets under `public/assets`:

```text
public/assets/
├── brand/                Logos, logo marks, and favicons
├── icons/                Custom SVG icons only
└── images/
    ├── gallery/           Finished nail sets and portfolio photography
    ├── hero/              Large page and campaign images
    ├── studio/            Interior and atmosphere photography
    └── team/              Team portraits
```

Use lowercase kebab-case names such as `pink-french-manicure-01.webp`. Prefer
AVIF or WebP for photography and SVG for logos. Keep original source files
outside the application; commit only web-ready exports. See
[`public/assets/README.md`](public/assets/README.md) for image guidance.

## Project conventions

Architecture, naming, Angular, TypeScript, template, SCSS, accessibility, asset,
and quality conventions are documented in
[`PROJECT_CONVENTIONS.md`](.agents/PROJECT_CONVENTIONS.md).

## License

This project is available under the MIT License. See [`LICENSE.md`](LICENSE.md).
