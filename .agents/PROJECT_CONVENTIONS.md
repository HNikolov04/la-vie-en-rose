# La Vie en Rose project conventions

This file is the source of truth for the repository's structure, naming,
implementation style, visual system, assets, and quality expectations. New code
should follow these rules unless a deliberate architectural decision updates
this document first.

## 1. Product scope

La Vie en Rose is currently a mostly static marketing SPA for a nail salon. The
codebase should stay lightweight while preserving a clean path toward booking,
CMS content, localization, analytics, and customer features.

Current principles:

- Prefer simple, semantic presentation components.
- Add state or services only when a real interaction requires them.
- Do not add a UI framework for a component that is straightforward in HTML and
  SCSS.
- Avoid speculative abstractions. Extract shared code after a pattern is proven.
- Keep all user-facing content easy to find in page component files.

## 2. Runtime and framework

- Angular 21 LTS is the pinned framework major.
- Use standalone components. Do not introduce `NgModule` files.
- TypeScript strict mode and Angular strict template checking stay enabled.
- Use the Angular CLI through the npm scripts in `package.json`.
- Keep production dependencies minimal and justify each new package.
- Commit `package-lock.json` and use npm for dependency management.

## 3. Repository structure

```text
src/
|-- app/
|   |-- core/              One-instance layout and infrastructure components
|   |   |-- header/
|   |   `-- footer/
|   |-- pages/             Components mapped directly to routes
|   |-- app.config.ts      Application-level providers
|   |-- app.routes.ts      Lazy route configuration and page titles
|   |-- app.ts             Root component
|   |-- app.html
|   `-- app.scss
|-- index.html             Document metadata and external font declarations
|-- main.ts                Application bootstrap only
`-- styles.scss            Global tokens, reset, utilities, and shared patterns

public/assets/
|-- brand/                 Logos, marks, favicons, brand graphics
|-- icons/                 Custom SVG icons not covered by Material Symbols
`-- images/
    |-- gallery/           Nail work and portfolio photography
    |-- hero/              Hero and campaign photography
    |-- studio/            Interior, product, and atmosphere photography
    `-- team/              Portraits
```

Future reusable presentational components belong in `src/app/shared/`. Future
singleton services, guards, interceptors, and global models belong in
`src/app/core/` in clearly named subfolders.

## 4. Naming

- Use lowercase kebab-case for folders and filenames: `booking-card.scss`.
- Follow the modern Angular concise component convention used in this project:
  `home.ts`, `home.html`, and `home.scss`; do not mix in `.component` suffixes.
- Use PascalCase for classes, interfaces, and types: `ServiceGroup`.
- Use camelCase for variables, methods, signal values, and object properties.
- Use descriptive names. Avoid shortened names other than established terms.
- Prefix component selectors with `app-`: `app-header`.
- Name boolean values as states or questions: `menuOpen`, `isLoading`, `hasError`.
- Name event handlers by action: `closeMenu()`, `submitBooking()`.
- Name CSS classes by purpose rather than visual appearance whenever practical.
- Asset filenames use lowercase kebab-case and may end in a sequence number:
  `rose-chrome-manicure-02.webp`.

## 5. Angular components

- Every component is standalone and declares its dependencies in `imports`.
- Use `ChangeDetectionStrategy.OnPush` on every component.
- Keep one component class per TypeScript file.
- Keep the template and styles in adjacent external files unless a component is
  genuinely tiny.
- Mark template-only members `protected` so they are not exposed as public API.
- Mark immutable values `readonly`.
- Use signals for local interactive state.
- Prefer inputs and outputs for component communication; do not reach into child
  component instances to change state.
- Route components are lazy-loaded with `loadComponent` in `app.routes.ts`.
- Give every public route a useful document title.
- Shared shell components belong in `core`; route-level content belongs in
  `pages`.

Example:

```ts
@Component({
  selector: 'app-example',
  imports: [RouterLink],
  templateUrl: './example.html',
  styleUrl: './example.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example {
  protected readonly expanded = signal(false);
}
```

## 6. TypeScript

- Do not use `any`. Model data with interfaces, types, or inferred literals.
- Prefer `const`; use `let` only for reassignment.
- Add explicit return types to methods.
- Keep data immutable by default with `readonly` where useful.
- Prefer small, focused functions with early returns over deeply nested branches.
- Do not place business logic in templates.
- Do not leave `console.log` calls in committed code. `console.error` is only
  appropriate at an application boundary where the error cannot be recovered.
- Use single quotes and semicolons, matching the existing source.
- Keep imports grouped with Angular/framework imports before local imports.
- Use the repository `.prettierrc.json` for shared formatting preferences.

## 7. Templates and content

- Use semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Keep one `h1` per page and maintain logical heading order.
- Use Angular built-in control flow (`@if`, `@for`, `@switch`).
- Every `@for` block must have a stable `track` expression.
- Prefer router links for internal navigation and regular anchors for external
  URLs, email addresses, and phone numbers.
- Buttons perform actions; links navigate.
- Add accessible names to icon-only controls.
- Decorative imagery should not be announced. Content imagery requires concise,
  meaningful alternative text.
- Do not hard-code final contact details, prices, or policies without confirming
  them with the owner. Current values are presentation placeholders.

## 8. Internationalization

- Every visitor-facing string must be available in English and Bulgarian.
- Translation dictionaries live in `src/app/core/i18n/translations.ts`.
- English is the source dictionary. The Bulgarian dictionary is typed against
  every English key so a missing translation fails compilation.
- Components inject `I18nService` and render copy with `i18n.t(key)`.
- Do not add visitor-facing prose directly to page TypeScript or templates.
  Proper names, phone numbers, email addresses, prices, and icon identifiers are
  exempt when they do not change by language.
- Data-driven page content stores `TranslationKey` values instead of translated
  text.
- Add a translated `titleKey` to every route. `I18nTitleStrategy` updates the
  browser title when either the route or language changes.
- The service keeps the HTML `lang` attribute and meta description synchronized
  and persists the user's choice locally.
- The current URL structure is language-neutral. Do not introduce `/en` or `/bg`
  prefixes without an explicit SEO and routing decision.
- Keep Bulgarian copy natural and concise rather than translating word for word.
- After adding translations, switch languages on every changed page and check
  that longer Bulgarian labels remain responsive.

## 9. SCSS and design system

- Global colour, type, container, shadow, and spacing values are CSS custom
  properties in `src/styles.scss`.
- Consume tokens such as `var(--rose-700)`; do not scatter near-duplicate colour
  literals through component styles.
- Pink and warm white are the primary palette. Gold is a restrained accent for
  small lines, stars, borders, and selected details, not large backgrounds or
  body text.
- Inter is the body and interface font. Playfair Display is the readable accent
  font for headings and brand moments.
- Keep body copy at a comfortable line height of roughly `1.6` to `1.8`.
- Use fluid typography with `clamp()` for large headings.
- Component styles stay scoped in the component's SCSS file.
- Global styles are limited to reset rules, tokens, typography, layout utilities,
  buttons, and genuinely shared visual patterns.
- Follow the existing simple BEM-like modifiers: `.button--primary` and
  `.navigation--open`.
- Start with the desktop layout when it helps composition, then provide complete
  responsive behavior at the existing breakpoints.
- Respect `prefers-reduced-motion` for animations and smooth scrolling.
- Preserve visible focus styles; never remove an outline without an accessible
  replacement.

## 10. Assets

- Browser-served assets live under `public/assets` and use base-relative URLs,
  for example `assets/images/hero/home-manicure.webp`.
- Do not add a leading slash to asset URLs. Relative asset paths must continue
  to work under the `/la-vie-en-rose/` GitHub Pages base path.
- Use SVG for logos and simple custom icons.
- Prefer AVIF, then WebP, for photography. Use PNG only when alpha transparency
  is required and SVG is not suitable.
- Export hero images around 2000 px wide and content images around 1200-1600 px
  wide unless the design needs more.
- Compress all images before committing. A typical content image should remain
  below 300 KB where quality permits.
- Keep original RAW, PSD, AI, or very large source files outside the repository.
- Use meaningful dimensions or `aspect-ratio` to avoid layout shifts.
- Do not place content images in `src`; Angular's public asset root is the single
  canonical location.

## 11. Accessibility and responsive behavior

- Target WCAG 2.2 AA color contrast for text and interactive elements.
- All functionality must be reachable by keyboard.
- Interactive controls need visible hover and focus-visible states.
- Form fields require persistent labels, not placeholders alone.
- Do not communicate meaning through colour only.
- Test layouts at 320 px, 768 px, 1024 px, and a wide desktop viewport.
- Avoid horizontal page scrolling at every supported width.
- Touch targets should be approximately 44 by 44 px or larger.

## 12. Routing and scrolling

- Define routes only in `src/app/app.routes.ts`.
- Use lowercase URL paths with hyphens if more than one word is needed.
- Internal page changes use `routerLink`.
- Section navigation uses URL fragments and relies on the configured anchor
  scrolling.
- Unknown routes currently redirect to the home page. Add a dedicated not-found
  page if the site grows beyond the current marketing scope.

## 13. Quality checks

Before handing off a change:

1. Run `npm run build`.
2. Resolve all Angular template and TypeScript errors.
3. Check the changed page at mobile and desktop widths.
4. Verify keyboard navigation and visible focus states.
5. Check that internal links and route titles are correct.
6. Confirm new assets follow the asset rules above.
7. Update this convention file and the README if structure or setup changes.

The production build must remain within the budgets declared in `angular.json`.
Do not silence warnings by raising budgets without understanding the bundle
increase.

## 14. Version control

- Keep commits focused and describe the user-visible outcome.
- Never commit `node_modules`, `dist`, `.angular`, editor caches, or local secrets.
- Do commit `package-lock.json`, shared `.vscode` configuration, and web-ready
  public assets.
- Do not overwrite unrelated work in a dirty working tree.
- Never commit API keys or credentials. Future environment configuration should
  use ignored local files and documented safe examples.
