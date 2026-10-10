# agfont.github.io

Personal portfolio of Arthur Font, live at https://agfont.github.io.

Built with [Astro](https://astro.build) as a fully static site, with no UI framework.

## Development

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run check    # type-check
npm run build    # static build to ./dist/
npm run preview  # serve the built site
```

## Adding a project

Add a Markdown file to `src/content/work/`. Its frontmatter is validated by the schema in `src/content.config.ts`; `fields` must come from `src/utils/fields.ts` and technologies from `src/utils/technologies.ts`.

## Deployment

Every push to `main` type-checks, builds and deploys to GitHub Pages (`.github/workflows/deploy.yaml`).

## License

Content is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
