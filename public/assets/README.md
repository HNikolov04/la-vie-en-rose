# Public assets

This is the canonical home for all web-ready assets provided for the salon.
Angular copies this directory to the site root when it builds.

## Folder layout

```text
assets/
|-- brand/
|   |-- logo-horizontal.svg
|   |-- logo-mark.svg
|   `-- favicon.svg
|-- icons/
`-- images/
    |-- gallery/
    |-- hero/
    |-- studio/
    `-- team/
```

Reference a file in a template from `/assets`, for example:

```html
<img
  src="/assets/images/hero/home-manicure.webp"
  alt="Pink manicure created at La Vie en Rose"
  width="1600"
  height="1200"
>
```

## File guidelines

- Use SVG for logos and custom vector icons.
- Prefer AVIF or WebP for photography.
- Use lowercase kebab-case names such as `pink-french-manicure-01.webp`.
- Keep large original or editable source files outside this repository.
- Compress web exports and provide intrinsic width and height in templates.
- Write useful alternative text for meaningful images; use an empty `alt` value
  for purely decorative images.
