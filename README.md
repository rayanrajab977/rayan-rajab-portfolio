# Rayan Rajab — Personal Portfolio

Personal portfolio and digital identity website for Rayan Rajab — technology builder working across cloud computing, cybersecurity, AI and software engineering.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts) + JetBrains Mono

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                   # Next.js App Router
  layout.tsx           # Root layout with metadata
  page.tsx             # Main page — wires all sections
  globals.css          # Global styles + design tokens
  sitemap.ts           # Sitemap
  robots.ts            # Robots

components/
  navigation/          # Floating nav with scroll behaviour
  hero/                # Cinematic hero + particle canvas
  about/               # Who I Am + IntersectionOrb
  capabilities/        # What I Build — 5 domain cards
  projects/            # Things I've Built — cards + modal
  experience/          # Beyond the Code — timeline
  community/           # Building with People — events
  journey/             # The Journey — story chapters
  exploring/           # Currently Exploring — bars
  lab/                 # The Lab — experiments
  ideas/               # Thinking Out Loud — writing
  contact/             # Let's Build Something — contact
  footer/              # Footer
  ui/                  # CustomCursor

data/                  # Structured content
  projects.ts          # Project data model
  experience.ts        # Experience / roles
  events.ts            # Community events
  lab.ts               # Lab experiments
  ideas.ts             # Writing topics

lib/
  utils.ts             # cn() utility
  animations.ts        # Shared Framer Motion variants
```

## Before Deploying

Replace all `[ADD ...]` placeholders in the data files and components:

- `data/experience.ts` — add real dates
- `data/events.ts` — add real dates
- `components/contact/Contact.tsx` — add LinkedIn, GitHub, email links
- `components/footer/Footer.tsx` — add social links
- `app/layout.tsx` — replace `https://rayanrajab.dev` with real domain
- `app/sitemap.ts` — replace with real domain
- `public/og-image.png` — add a real Open Graph image (1200×630)
- `public/favicon.ico` — add real favicon

## Performance Notes

- Particle canvas is disabled when `prefers-reduced-motion` is set
- Custom cursor disabled on touch devices
- Heavy components loaded with `next/dynamic` + `ssr: false`
- Images use Next.js Image optimisation
