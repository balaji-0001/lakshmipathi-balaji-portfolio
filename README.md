# D. Lakshmipathi Balaji — Engineering Portfolio

Personal software engineering portfolio built with [Next.js](https://nextjs.org) and [Once UI Magic Portfolio](https://once-ui.com/products/magic-portfolio), showcasing backend engineering, autonomous AI agent systems, enterprise automation, and full-stack applications.

## Portfolio Architecture

- **Configuration & Theme**: [`src/resources/once-ui.config.ts`](src/resources/once-ui.config.ts) — Primary dark slate/cyan theme with light-mode toggle support, route toggles, typography (`Geist` & `Geist_Mono`), and SEO configuration.
- **Portfolio Content**: [`src/resources/content.tsx`](src/resources/content.tsx) — Typed source of truth for personal branding, navigation, experience timeline, technical skills, education, certifications, resume configuration, and contact links.
- **Project Case Studies**: [`src/app/work/projects/*.mdx`](src/app/work/projects) — MDX project specifications and architecture write-ups for **100 TIMES**, **YottaFlex AI**, and **SocialFlow**.
- **Pages & Sections**:
  - `/` (`src/app/page.tsx`): Full portfolio experience (Hero, About, Experience, Featured Projects with Quick Preview modals, Technical Skills, Education & Certifications, Resume download, and Contact).
  - `/about` (`src/app/about/page.tsx`): Structured CV dossier with table of contents.
  - `/work` & `/work/[slug]`: Project archive and individual architectural case studies.

## Customizing Links & Resume PDF

1. **Resume PDF**: Replace `public/resume.pdf` with your latest exported resume PDF to update all download buttons across the Hero, Education/Resume card, Mobile Drawer, Footer, and Contact section.
2. **Project Repository & Demo Links**: Add your exact GitHub repository and live demo URLs in the YAML frontmatter of:
   - `src/app/work/projects/100-times.mdx` (`github`, `link`)
   - `src/app/work/projects/yottaflex-ai.mdx` (`github`)
   - `src/app/work/projects/socialflow.mdx` (`github`, `link`)
3. **Deployment URL**: Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (see `.env.example`) for canonical Open Graph URLs, `sitemap.xml`, and `robots.txt`.

## Local Development & Verification

```bash
npm install
npm run dev
```

Run typechecking, formatting/lint checks, and production build:

```bash
npx tsc --noEmit
npx @biomejs/biome check src
npm run build
```

## License

Built on Magic Portfolio (Once UI), distributed under CC BY-NC 4.0 with Once UI attribution preserved in the footer.
