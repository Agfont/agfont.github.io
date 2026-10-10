# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (https://agfont.github.io) built with Astro as a fully static site. No UI framework: everything is `.astro` components plus vanilla TypeScript in `<script>` tags and Web Components.

## Commands

```sh
npm install
npm run dev          # dev server at localhost:4321
npm run build        # static build to ./dist/
npm run preview      # serve the built site
npx npm-check-updates -u && npm install   # update all dependencies to latest, including majors (rewrites package.json)
npm run check        # type-check with astro check (strict tsconfig)
```

There is no test suite or linter. Deployment is automatic: every push to `main` runs `.github/workflows/deploy.yaml` (`withastro/action`, Node 26) and publishes to GitHub Pages. Dependabot opens dependency PRs.

## Architecture

**Work/portfolio content** is an Astro content collection (`src/content.config.ts`), loaded from Markdown files in `src/content/work/` (files starting with `_` are ignored). Each file's frontmatter must match the zod schema:
- `fields`: high-level categories, restricted to `WORK_FIELDS` in `src/utils/fields.ts` (which also feeds the filter menu)
- `technologies`: a map of **group name → list of technologies**, e.g. `Frontend: ['React', 'Tailwind CSS']`; both keys and values must exist in `TECHNOLOGY_GROUPS`, otherwise the build fails
- `order`: optional manual ranking (lower first); entries without it sort after, by `date` descending
- `link`: optional external URL

`src/pages/work/[work].astro` generates one page per entry via `getStaticPaths`, rendered with `src/layouts/WorkLayout.astro`. Other pages use `src/layouts/Layout.astro`.

**Technology taxonomy** lives in `src/utils/technologies.ts`: `TECHNOLOGY_GROUPS` defines the groups and their technologies, and `TECHNOLOGY_GROUP_COLORS` the badge color per group. Tag colors are resolved by looking a technology up in `TECHNOLOGY_GROUPS`, not from the frontmatter group key. To use a new technology in a work entry, add it to `TECHNOLOGY_GROUPS` first.

**Work page filtering** (`src/pages/work.astro`) is client-side: all entries are serialized into the `data-work` attribute of a `<work-filter>` custom element, which filters by search text, `fields` tags and technologies, sorts, and reorders/hides the server-rendered `WorkCard` elements. Filter state is synced to the URL query string (`tags`, `tech`, `sort`, `search`). The sort logic is duplicated between the frontmatter script and the client script of `work.astro`; keep both in sync.

**Theming**: dark mode is a `theme-dark` class on `<html>`, set by an inline script in `MainHead.astro` (avoids a flash) and toggled by the `ThemeToggle` custom element. CSS variables are defined in `src/styles/global.css` (`:root` and `:root.theme-dark`); scoped component styles target dark mode with `:global(.theme-dark) ...`.

**Icons**: `Icon.astro` renders inline SVG from the path strings in `IconPaths.ts` (Phosphor icons; instructions for adding one are at the top of that file).

**Notebooks**: `src/pages/notebooks/*.html` are exported Jupyter notebooks served as standalone pages (e.g. `/notebooks/esa-biomass-remote-sensing`), linked from a work entry's `link`. They are large generated files; regenerate rather than hand-edit.

## Repo instructions

`.github/instructions/astro.instructions.md` holds general Astro best-practice guidance (Content Layer API, `astro:assets` for images, minimal client-side JS, scoped styles). The existing `README.md` is the unmodified Astro starter template.
