# UtubeHelpers — rebuilt for AdSense approval

Free YouTube creator tools + growth guides. Next.js 16 (App Router) + Tailwind CSS v4.

## Deploy to Vercel via GitHub

1. Create a new GitHub repo (e.g. `utubehelpers`) and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Rebuild for AdSense approval"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/utubehelpers.git
   git push -u origin main
   ```
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: Next.js. Deploy.
3. In Vercel project settings → **Domains**, add `utubehelpers.com` (and `www`).
4. Local dev: `npm install` then `npm run dev`.

## BEFORE you apply to AdSense — fill these in

1. **`public/ads.txt`** — replace `ca-pub-XXXXXXXXXXXXXXXX` with YOUR publisher ID
   (AdSense → Account → Account information). Keep only your own entry.
2. **Vercel env var** — add `NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX`
   (Project → Settings → Environment Variables, then redeploy). This renders the
   `<meta name="google-adsense-account">` verification tag automatically.
3. **`lib/authors.ts`** — update the bio with your real details if you want
   (name, background, links).
4. **`app/about/page.tsx`** — same; make the founder story yours.
5. **`app/contact/page.tsx`** — `CONTACT_EMAIL` is `contact@utubehelpers.com`; change if needed.

## Content

- Blog posts live in `content/blog/*.mdx` (94 posts). Frontmatter: title, description,
  date, author, tags, faqs. Body is Markdown (GFM supported).
- To add a post: drop a new `.mdx` file in `content/blog/` — listing, sitemap,
  RSS-less routing, and JSON-LD update automatically at build time.
- Tools live in `components/tools/*.tsx`, registered in `app/tools/[slug]/page.tsx`,
  metadata in `lib/tools.ts`.

## AdSense application checklist

- [ ] ads.txt contains ONLY your publisher ID
- [ ] `NEXT_PUBLIC_ADSENSE_ID` env var set in Vercel + redeployed
- [ ] Site is live on the custom domain with HTTPS
- [ ] About page has a real named founder (done — review it)
- [ ] Contact page works (done — mailto-based, no fake backend)
- [ ] Privacy Policy, Terms, Disclaimer, Cookie Policy published (done)
- [ ] Cookie consent banner appears for new visitors (done)
- [ ] 94 full-length guides published with author bylines + dates (done)
- [ ] No placeholder text anywhere — search the repo for `TODO`, `lorem` (note: `ca-pub-XXXXXXXXXXXXXXXX` in `public/ads.txt` is an intentional placeholder for the owner to replace)
- [ ] Submit `sitemap.xml` in Google Search Console after deploy
- [ ] Wait: apply only when the domain is ~4+ months old with steady publishing.
      Do NOT submit repeatedly — one careful application beats five rushed ones.

## After approval

Add your AdSense ad code (Auto ads or manual units). The privacy/cookie policy
already discloses advertising cookies, so no policy edits are needed — just make
sure the cookie banner is still showing.
