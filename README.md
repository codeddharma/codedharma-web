# codedharma.com

The CodeDharma website: Next.js 16 (App Router), Tailwind CSS v4, TypeScript, with self-hosted fonts (Young Serif, IBM Plex Sans/Mono).

- All copy: `src/content/site.ts`
- Brand tokens: `src/app/globals.css` (`@theme`)
- Logo: `src/components/Logo.tsx`, favicon `src/app/icon.svg`
- Contact form: `src/components/ContactForm.tsx` → `src/app/api/contact/route.ts` (sends through Resend)

## Run locally
```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

## Deploy (Vercel)
1. Push this folder to a GitHub repo and import it in Vercel. The defaults work as-is.
2. Add the env vars from `.env.example` in Vercel → Settings → Environment Variables.
3. Vercel → Domains → add `codedharma.com` and `www.codedharma.com`, then set the DNS records Vercel shows you.

## Email: hello@codedharma.com → Gmail (Cloudflare Email Routing)
1. Move codedharma.com's DNS to Cloudflare (free plan): add the site and change the nameservers at your registrar.
2. Cloudflare → Email → Email Routing → Enable. Cloudflare adds its MX and SPF records for you.
3. Add a custom address `hello@codedharma.com` → your Gmail, then verify the destination.
4. Replying as hello@: Gmail → Settings → Accounts → "Send mail as" → add hello@codedharma.com, SMTP `smtp.gmail.com:587` with a Google App Password.
5. SPF: keep a single TXT record that includes Cloudflare, Google and Resend (Resend shows its exact include when you verify the domain), ending in `~all`.
6. DMARC: add TXT `_dmarc` → `v=DMARC1; p=none; rua=mailto:hello@codedharma.com`.
   Note: Gmail "send as" signs mail as gmail.com, so some replies may land in spam. If that happens, move to Google Workspace or Zoho.

## Contact form (Resend)
1. Create a free Resend account and add `codedharma.com` as a domain. Add the DKIM/SPF records it shows (in Cloudflare DNS).
2. Create an API key → `RESEND_API_KEY` in Vercel.
3. `CONTACT_FROM` must use the verified domain, e.g. `CodeDharma Website <website@codedharma.com>`.
