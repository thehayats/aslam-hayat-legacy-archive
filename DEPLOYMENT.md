# Deployment Notes — Aslam Hayat Legacy Archive

## Hosting

- **Platform:** Cloudflare Pages
- **Repository:** GitHub (`thehayats/aslam-hayat-legacy-archive`, branch `main`)
- **Build command:** `npm run build`
- **Output directory:** `out`
- **Auto-deploy:** Cloudflare Pages deploys automatically on every push to `main`

## Live Domains

| Domain | Status |
|--------|--------|
| https://aslamhayat.com | ✅ Active |
| https://www.aslamhayat.com | ✅ Active |

Both domains are routed through Cloudflare. No further DNS configuration is needed.

## Current Deployment

**Deployed commit:** `2303c05` — Quality audit pass (June 2026)

What is live:
- All 21 oversized PNG gallery images converted to optimised JPEG (gallery reduced from 75MB to 33MB)
- All gallery.json src references updated from `.png` to `.jpg`
- Unused hero images (`hero-portrait.jpg`, `hero-portrait-v2.jpg`) removed
- Hero image serves with `fetchPriority="high"` and `decoding="async"` for faster LCP
- Gallery images serve with `loading="lazy"` and `decoding="async"`
- AI-generated placeholder content, fabricated quotes, and "Explore Further" footers removed from all section pages
- Section page intros rewritten with specific, verified content

## Stack

- **Framework:** Next.js 14 (static export — `output: 'export'`)
- **Images:** Unoptimised mode (`images: { unoptimised: true }`) — required for static export; images are pre-optimised manually
- **Styling:** Tailwind CSS

## Post-Deploy QA (June 13, 2026)

- All 20 internal routes return HTTP 200 ✅
- No `.png` references remain in the deployed gallery page ✅
- Converted gallery images (spot-checked) return HTTP 200 ✅
- Old hero images return HTTP 404 (correctly removed) ✅
- No broken internal navigation links detected ✅
- Both apex and www domains confirmed live ✅
