# Naufal Faisal — Portfolio

Personal portfolio website for Naufal Faisal, CS student at UMT Lahore (2027), specialising in Machine Learning and Artificial Intelligence.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D:** Three.js + @react-three/fiber + @react-three/drei
- **Smooth Scroll:** Lenis
- **Fonts:** Syne (display) + DM Sans (body) + DM Mono (labels)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on [Vercel](https://vercel.com) — push to `main` branch triggers automatic deployment.

## Sections

1. **Hero** — Three.js neural-network particle animation + name reveal
2. **About** — Bio, status, photo
3. **Experience** — Internship timeline (East Gate Industries + Innoverse)
4. **Skills** — ML/AI tech stack + CS fundamentals
5. **Projects** — Project cards with hover reveals
6. **Contact** — Links and email

## Customization

- Replace placeholder email in `Contact.tsx`
- Add GitHub + LinkedIn URLs in `Contact.tsx` and `Navbar.tsx`
- Replace photo placeholder in `About.tsx` with `<Image>` from `next/image`
- Swap project cards in `Projects.tsx` with real work
