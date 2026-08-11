# Project Guide

## Overview

This is a single-page professional portfolio for Nadine N. Paco, built with TanStack Start and deployed on Netlify. It is intentionally static, public, fast, accessible, and recruiter-friendly. No database, authentication, form backend, or invented profile information is used.

## Architecture

- `src/routes/__root.tsx` defines the HTML shell, SEO metadata, canonical URL, social metadata, fonts, and Person structured data.
- `src/routes/index.tsx` contains the portfolio sections, typed content arrays, sticky navigation, mobile menu, and active-section tracking.
- `src/styles.css` contains the burgundy and khaki design system, layout rules, component styles, breakpoints, landscape handling, focus states, and reduced-motion support.
- `public/assets/` contains production image assets.
- `public/robots.txt`, `public/sitemap.xml`, and `public/_headers` support crawling, indexing, caching, and basic response security.

## Conventions

- Keep all personal information factual and user-provided. Never add employers, projects, awards, certifications, testimonials, email addresses, or social profiles without explicit confirmation.
- Use semantic sections and preserve the navigation IDs: `home`, `about`, `skills`, `interests`, `education`, `strengths`, and `contact`.
- Use CSS variables from `src/styles.css` for colors and maintain the pastel burgundy, soft khaki, cream, and warm-white palette.
- Keep components and content typed. Use PascalCase for React components and camelCase for data collections and functions.
- Maintain keyboard access, visible focus states, readable contrast, touch-friendly controls, and reduced-motion behavior.
- Avoid fixed page widths. Preserve the existing fluid grid, `clamp()` sizing, and breakpoint system.

## Domain Changes

The current canonical address is the assigned Netlify URL. If a custom domain is connected, update it consistently in `src/routes/__root.tsx`, `public/robots.txt`, and `public/sitemap.xml`.
