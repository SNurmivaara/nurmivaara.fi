# Sami Nurmivaara Portfolio

Almost minimal personal web page / CV built with **Next.js** and **Tailwind CSS**.

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS
- **Node.js 22** - Runtime environment

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Deployment

Deployed to [Vercel](https://vercel.com) at [nurmivaara.fi](https://nurmivaara.fi).

Merging a PR to `main` triggers automatic deployment. Direct pushes to `main` are blocked by branch protection rules.

## Monitoring

**Vercel:**
- **Analytics** - Page views and visitor data
- **Speed Insights** - Core Web Vitals performance metrics

**GitHub:**
- **CI** - Lint and build on every PR and on pushes to `main` (`.github/workflows/ci.yml`). Required to merge.
- **Dependabot** - Weekly dependency and GitHub Actions PRs (configured in `.github/dependabot.yml`)
- **Auto-merge** - Dependabot PRs merge themselves once CI and the Vercel deploy pass (`.github/workflows/dependabot-auto-merge.yml`). Major bumps of `next`, `react`, `react-dom` or `tailwindcss` are held for manual review, since those can build cleanly and still change the design.

**Not set up:** there is no uptime alerting. The site is statically prerendered and served from Vercel's CDN, so there is no runtime to fall over - the realistic failure modes are a bad deploy or the domain lapsing, neither of which an HTTP ping would catch. Vercel's own deployment-failure notifications are the useful signal if you want one.
