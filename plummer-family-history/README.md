# Plummer Family History (static site)

This folder contains a single-file website you can publish on GitHub Pages or Netlify.  
- **index.html** → public, view-only (no editing UI)  
- **admin.html** → editor enabled by filename (keep this private; do not upload to the public repo)  
- Add photos under `/photos` and reference them via **Photos → Add Repo Photo**.

## Quick publish to GitHub Pages
1. Create a repo named `plummer-family-history` under your account (public).
2. Upload **index.html** (only). Do **not** upload `admin.html` to the public repo.
3. In *Settings → Pages*, set Source to *Deploy from a branch*, Branch = `main`, Folder = `/ (root)`.
4. Visit: https://pplum71.github.io/plummer-family-history/

## Safe editing
- Open **admin.html** locally (double-click). Make changes, export JSON backups.
- To reflect updates for visitors, either replace the seed JSON in `index.html` or ask me to wire a `/data/*.json` loader.

## Repo photos
- Put your images in `/photos` (e.g., `photos/grandma-1960.jpg`).
- In admin mode, click **Add Repo Photo** and enter the filename + caption.

## Optional query flags
- `?admin=1` → temporarily enables editor (use briefly)  
- `?photos=repo` → hides local upload UI and treats gallery as repo-based

---
Generated on 2025-09-25 21:05:57.
