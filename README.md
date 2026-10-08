# Tuna Security Research

Personal security research blog powered by Astro, Markdown Content Collections and Shiki syntax highlighting.

## Quickstart

Requires Node.js 22.12+ (Node.js 24 recommended).

```bash
npm install
npm run dev
npm run build
```

Visit http://localhost:4321.

## Publish a new article

Create `src/content/blog/your-article.md`:

```markdown
---
title: "Your research title"
description: "A short summary"
pubDate: 2026-10-08
category: "Malware Analysis"
tags: ["Windows", "DFIR"]
---

## Introduction

Write your analysis here.
```

Commit and push to `main`. The GitHub Actions workflow builds and deploys the site automatically.

## GitHub Pages configuration

In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.

Site: https://tuna1999.github.io/

## Features

Dark responsive UI, article archive with keyword filtering, topic pages, automatically generated table of contents, syntax highlighting, RSS and sitemap.

## Safety

Do not publish live malware binaries, secrets, private indicators, or customer data. All included sample research articles are educational methodology notes, not real incident findings.
