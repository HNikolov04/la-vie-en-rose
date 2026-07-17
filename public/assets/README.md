# Public assets

This is the canonical home for the salon's web assets. Angular copies this
directory to the built site unchanged.

## Current folder layout

```text
assets/
|-- brand/
|   `-- logo-primary.png
|-- images/
|   |-- prices/
|   |-- services/
|   |-- studio/
|   `-- team/
`-- info/
    |-- location-map-reference.png
    `-- salon-information.txt
```

The `info/` folder contains the temporary source notes supplied for the site.
It can be removed once the content has been approved and no longer needs to be
kept with the public assets.

Reference a file with a base-relative `assets/` URL. Do not add a leading slash,
because the production site is hosted below the `/la-vie-en-rose/` path:

```html
<img
  src="assets/images/services/soft-pink-french-manicure.png"
  alt="Pink manicure created at La Vie en Rose"
  width="1600"
  height="1200"
>
```

## File guidelines

- Keep brand files in `brand/` and photography grouped by its purpose.
- Prefer AVIF or WebP for future photography when web-ready exports exist.
- Use lowercase kebab-case names such as `pink-french-manicure-01.webp`.
- Keep large original or editable source files outside this repository.
- Compress web exports and provide intrinsic width and height in templates.
- Write useful alternative text for meaningful images; use an empty `alt` value
  for purely decorative images.
