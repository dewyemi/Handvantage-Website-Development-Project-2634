# Public assets

Drop the founder portraits + logo PNGs from `outputs/images/` into the matching subdirectories before deploy:

- `public/images/portraits/josh-olayemi-bw-1500.jpg` (referenced by the philosophy page + home "From a founder" section)
- `public/images/logo/handvantage-h-oxblood.png` (referenced by JSON-LD organisation logo)

Until they are dropped in, the site renders an editorial placeholder for the portrait (the FounderPortrait component handles the missing-image case gracefully via onError).
