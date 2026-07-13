# Deploy Guide — earthdogfilms.com

## How it works

Push to the `main` branch on GitHub → GitHub Actions automatically builds the site and deploys it to GitHub Pages → live at **earthdogfilms.com**.

The custom domain is wired up via the `CNAME` file in the repo root (contains `earthdogfilms.com`). The GitHub Actions workflow is at `.github/workflows/deploy.yml`.

You do **not** need to run `npm run build` yourself before pushing — the CI does it.

---

## Deploy steps

```bash
# 1. Stage your changes (be specific — avoid git add -A to exclude .DS_Store etc.)
git add src/ public/ index.html

# 2. Commit
git commit -m "your message here"

# 3. Push to main — this triggers the deploy
git push origin main
```

After pushing, the GitHub Actions job takes ~1–2 minutes. Watch it at:
https://github.com/brianhedden333/earthdogfilms/actions

---

## Repository

https://github.com/brianhedden333/earthdogfilms

Remote: `https://github.com/brianhedden333/earthdogfilms.git`  
Branch: `main`

---

## What NOT to commit

- `.DS_Store` — already in `.gitignore`
- `dist/` — already in `.gitignore`; GitHub Actions rebuilds it fresh on every deploy
- `node_modules/` — already in `.gitignore`

If `dist/index.html` shows up in `git status` as modified, you can ignore it — it was committed before `.gitignore` was configured. It doesn't affect the deploy since CI rebuilds it.

---

## Adding new image assets

Copy images into `public/lovable-uploads/` and reference them in code as `/lovable-uploads/filename.jpg`.  
Stage them with the rest of your changes before committing.

---

## Local dev

```bash
npm run dev       # starts at localhost:5173
npm run build     # optional local build check before pushing
```

---

## Origin of the codebase

Originally scaffolded via [Lovable](https://lovable.dev/projects/b84ed1b2-aaed-41ee-a7f8-e432e2d6bddc). Lovable is no longer the deploy target — all deploys go through GitHub Actions → GitHub Pages as described above.
