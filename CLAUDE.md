# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev    # Development server at localhost:3000
npm run build  # Production build
npm start      # Production server
```

## Architecture

Minimal personal homepage built with **Next.js 16 + Tailwind CSS**.

### Pages

- [pages/index.js](pages/index.js) - Home/About page with hero section
- [pages/contact.js](pages/contact.js) - Contact page with social links

### Components

Shared components in `components/`:
- `Layout` - Page wrapper with Nav, Footer, and background
- `Nav` - Navigation with active link highlighting
- `Footer` - Copyright footer
- `Icons` - SVG icons (LinkedIn, GitHub, ChevronRight)

### Styling

- Tailwind CSS with custom animations defined in [tailwind.config.js](tailwind.config.js)
- Inter font loaded from `/public/fonts/`
- Dark slate color scheme with gradient backgrounds

### Key Files

- [pages/_app.js](pages/_app.js) - Global styles + Vercel Analytics/Speed Insights
- [pages/_document.js](pages/_document.js) - Meta tags for SEO/social sharing
- [styles/globals.css](styles/globals.css) - Tailwind imports + font definitions

## Code Style

Uses Prettier: single quotes, no semicolons, 2-space tabs.

## Deployment

Push to `main` auto-deploys to Vercel at `https://nurmivaara.fi`. Node version 22 (see `.nvmrc`).
