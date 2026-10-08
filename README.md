# Tuna Security Research

A static-first security research blog built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Stack

- Astro + Markdown Content Collections
- Shiki syntax highlighting (GitHub Dark)
- Responsive, accessible dark UI
- Tag pages, search, RSS, sitemap
- GitHub Actions deployment

## Local development

Requires Node.js 24+.

```bash
npm install
npm run dev
npm run build
npm run preview
```

Create posts in `src/content/blog/*.md` and include `title`, `description`, `pubDate`, `tags`, and `category` in frontmatter.

## Deployment

Push to `main`. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.

## Security

Do not publish live malware binaries, secrets, private data, or unapproved customer indicators in this public repository.

© tuna1999.