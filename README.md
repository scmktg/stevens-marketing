# Stevens Marketing

A single-page editorial website for an independent, performance-focused marketing consultancy. Built with Next.js App Router and TypeScript.

## Development

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Contact form

The contact form uses a server-side `/api/contact` route and the Resend email API. Copy `.env.example` to `.env.local`, then set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` (a verified sender). The UI only shows success after Resend accepts the email. Without configuration the server responds with 503 rather than falsely confirming delivery. Production hardening should include edge rate limiting and a managed bot challenge as needed.

## Brand artwork

The approved gentleman silhouette has **not** been added to this repository. The hero deliberately uses typographic editorial artwork instead of an invented logo; replace the `hero-art` composition with the supplied approved transparent silhouette once available.

## SEO

Set `NEXT_PUBLIC_SITE_URL` to the verified canonical site origin (e.g. `https://your-real-domain.example`) when deploying. Canonical URL and sitemap are only populated once the real origin is configured. No unverified corporate details, ratings, or credentials are emitted.

## Design

Colours: ivory `#F7F5F0`, executive black `#0B0B0B`, burgundy `#661320`. No fabricated testimonials, case studies, statistics or credentials.
