## Adding Photos to the Gallery

1. Place your image files in this folder: `public/images/gallery/`
2. Recommended formats: JPG, WebP
3. Recommended dimensions: 1200x900px (landscape) or 900x1200px (portrait)
4. Name files descriptively: `family-eid-1985.jpg`, `pcaa-office-1990.jpg`, `canada-winter-2005.jpg`
5. Update `content/gallery/gallery.json`:
   - Find the entry you want to update in the `"photos"` array
   - Change the `"src"` value from `"/images/gallery/placeholder-xxx.jpg"` to `"/images/gallery/your-filename.jpg"`
   - Update `caption`, `date`, `location`, and `description` with accurate information
   - Set `"featured": true` for photos you want to appear in the featured section
6. Run: `npm run build`
7. Commit and push to GitHub — Cloudflare auto-redeploys

## Category Guide

- `family` — Family moments, gatherings, home life
- `pakistan` — Years and memories from Pakistan
- `canada` — Life in Canada after emigration
- `professional` — PCAA career, colleagues, official events
- `documents` — Certificates, letters, manuscripts, official papers
- `community` — Community events, mosque, social gatherings
- `final-years` — Later years, grandchildren, peaceful moments

## Tips

- Scan old printed photos at 600 DPI for best quality
- Save as JPG at 85% quality for a good size/quality balance
- If a photo has multiple people, note who they are in the `description` field
- The `date` field can be approximate: "circa 1985" or "1990" are both fine
