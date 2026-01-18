# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev    # Development server at localhost:3000
npm run build  # Production build
npm start      # Production server
npm run lint   # Run ESLint
```

## Architecture

Minimal personal homepage built with **Next.js 16 + TypeScript + Tailwind CSS 4**.

### Pages

- [pages/index.tsx](pages/index.tsx) - Home/About page with hero section
- [pages/cv.tsx](pages/cv.tsx) - CV/Resume page with experience timeline

### Components

Shared components in `components/`:
- `Layout` - Page wrapper with Nav, Footer, and background
- `Nav` - Navigation with active link highlighting
- `Footer` - Copyright footer
- `Icons` - SVG icons (LinkedIn, GitHub, ChevronRight)

### Styling

- Tailwind CSS 4 with custom animations defined in [styles/globals.css](styles/globals.css)
- Inter font loaded from `/public/fonts/`
- Dark slate color scheme with gradient backgrounds

### Key Files

- [pages/_app.tsx](pages/_app.tsx) - Global styles + Vercel Analytics/Speed Insights
- [pages/_document.tsx](pages/_document.tsx) - Meta tags for SEO/social sharing
- [styles/globals.css](styles/globals.css) - Tailwind imports + font definitions
- [lib/config.ts](lib/config.ts) - Site configuration (name, social links)

## Code Style

- TypeScript with strict mode
- ESLint with Next.js and TypeScript rules
- Prettier: single quotes, no semicolons, 2-space tabs

## Deployment

Push to `main` auto-deploys to Vercel at `https://nurmivaara.fi`. Node version 22 (see `.nvmrc`).

## CV Data Management

CV data is stored in [lib/cv-data.json](lib/cv-data.json) and rendered by [pages/cv.tsx](pages/cv.tsx).

### Updating CV from LinkedIn ("update cv linkedin")

When the user says "update cv linkedin" and pastes LinkedIn experience text:

1. **Read current data**: Open [lib/cv-data.json](lib/cv-data.json)
2. **Compare entries**: For each position, check:
   - Period dates match
   - Role titles match
   - Descriptions are consistent
   - Skills lists are aligned
   - Project details match (client names, descriptions)
3. **Report differences**: List what's different between LinkedIn and CV
4. **Recommend direction**: Usually the CV (website) is more recently updated and should be the source of truth. Suggest LinkedIn updates rather than CV changes.
5. **If CV needs updates**: Edit [lib/cv-data.json](lib/cv-data.json) directly

### CV Data Structure

```json
{
  "summary": { "title": "...", "badges": [...] },
  "experience": [...],      // Recent/main experience
  "olderExperience": [...], // Pre-2018 roles (collapsed by default)
  "education": [...],
  "languages": [...]
}
```

Each experience entry:
```json
{
  "company": "Company Name",
  "role": "Job Title",
  "period": "Mon YYYY - Mon YYYY",
  "location": "City, Country",
  "description": "Brief description",
  "skills": ["Skill1", "Skill2"],
  "projects": [{ "title": "...", "client": "...", "description": "...", "skills": [...] }]
}
```
