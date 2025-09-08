# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` – Next.js App Router pages, layouts, and global styles (`globals.css`).
- `public/` – Static assets served at root (`/favicon.ico`, images).
- `docs/` – Project documentation; see `DEPLOYMENT.md` for hosting options.
- `next.config.ts` – Static export enabled (`output: 'export'`, unoptimized images).
- Build outputs: `.next/` (dev/build cache) and `out/` (static export).

## Build, Test, and Development Commands
- `npm run dev` – Start local dev server with Turbopack at `http://localhost:3000`.
- `npm run build` – Production build (static export per config) into `out/`.
- `npm start` – Run the production server (useful if not exporting statically).
- `npm run lint` – Lint TypeScript/React files using Next.js ESLint rules.
- Useful cleanup: `rm -rf .next out` to clear caches/outputs.

## Coding Style & Naming Conventions
- Language: TypeScript (strict mode). ESM imports only.
- Linting: ESLint extends `next/core-web-vitals` and `next/typescript`.
- Components: PascalCase (e.g., `HeroSection.tsx`); hooks/utilities: camelCase.
- Routes/segments under `app/`: kebab-case folder names.
- Tailwind CSS v4 via PostCSS; prefer utility-first classes over ad‑hoc CSS.
- Imports may use alias `@/*` mapped to `src/*` (see `tsconfig.json`).

## Testing Guidelines
- No test framework is configured yet. Recommended:
  - Unit/UI: Jest + React Testing Library in `src/__tests__/` with `*.test.tsx`.
  - E2E: Playwright in `e2e/` with `*.spec.ts`.
- Aim for critical-path coverage (components in `app/` and shared utils).
- Add `npm test` and CI before merging substantial test suites.

## Commit & Pull Request Guidelines
- Commits: Prefer Conventional Commits (e.g., `feat: add hero CTA`, `fix: resolve deploy error`).
- PRs must include:
  - Clear description and rationale; link related issues.
  - Screenshots/GIFs for UI changes.
  - Checklist of testing done (`npm run build`, `npm run lint`).
  - Notes on deployment impact (static export vs. dynamic hosting).

## Security & Configuration Tips
- Do not commit secrets. Use `./.env.local` for env vars; add new keys to README.
- For dynamic hosts (e.g., Vercel/Netlify), consider removing `output: 'export'` (see `DEPLOYMENT.md`).
- Large/remote images: keep optimized since images are unoptimized in static export.
