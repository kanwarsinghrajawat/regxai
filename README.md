# regX AI

Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle.

## Features

- **Real-time Enforcement**: Evaluate AI actions before execution
- **Immutable Records**: Tamper-evident evidence for audits
- **Deterministic Decisions**: Make risk decidable before it becomes costly

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run typecheck
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://regxai.com
```

## Project Structure

```
├── app/
│   ├── components/      # Shared components
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   ├── globals.css     # Global styles
│   ├── robots.ts       # Robots.txt
│   └── sitemap.ts      # Sitemap
├── public/             # Static assets
├── .gitignore
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## SEO Features

- ✅ Metadata optimization
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Semantic HTML

## Performance Optimizations

- ✅ Image optimization with Next.js Image
- ✅ Font optimization with next/font
- ✅ Code splitting
- ✅ Compression enabled
- ✅ SWC minification

## License

Private and proprietary.

