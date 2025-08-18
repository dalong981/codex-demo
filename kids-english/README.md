# Kids English

MVP web app for daily English learning for kids.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Preview

```bash
pnpm preview
```

## Test

```bash
pnpm test
```

## Lint

```bash
pnpm lint
```

## Deploy to GitHub Pages

Enable GitHub Pages for the repository and set the root to `/docs` (handled by workflow).

## Add a Lesson

```
pnpm new:lesson YYYY-MM-DD "Topic"
```

This creates `public/content/YYYY-MM-DD` with a template and updates `index.json`.
