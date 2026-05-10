# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start dev server**: `npm run dev` — Runs Next.js dev server on http://localhost:3000 with hot reload
- **Build for production**: `npm run build`
- **Start production server**: `npm start` — Runs the built app
- **Lint code**: `npm run lint` — Runs ESLint on the codebase

## Project Overview

This is a Next.js 16.2.6 tutorial project exploring core framework features using the **App Router** pattern (not the legacy Pages Router). It demonstrates server-side rendering, dynamic routing, API endpoints, layouts, and metadata configuration.

**Tech Stack:**
- Next.js 16.2.6 (latest)
- React 19.2.4 with TypeScript 5
- Tailwind CSS 4 for styling
- ESLint 9 for code linting

## Code Architecture

### Directory Structure

```
app/
├── hooks/              # Reusable Hooks
├── layout.tsx          # Root layout with navigation links
├── page.tsx            # Home page
├── globals.css         # Tailwind styles
├── api/
│   └── hello/
│       └── routes.ts   # API route example (GET/POST)
├── users/
│   ├── page.tsx        # /users listing page
│   ├── [userId]/
│   │   └── page.tsx    # Dynamic /users/:userId page
│   ├── friends/
│   │   └── page.tsx    # /users/friends page
│   ├── loading.tsx     # Skeleton UI for /users
│   └── layout.tsx      # Layout for /users subtree
├── about/page.tsx
├── contact/
│   ├── page.tsx
│   └── button.tsx      # Example client component
└── not-found.tsx       # 404 page
```

### Key Patterns

**1. Pages & Routing**
- Each `page.tsx` file creates a route based on file structure
- Nested folders create nested routes (e.g., `app/users/[userId]/page.tsx` → `/users/:userId`)
- Dynamic segments use `[paramName]` syntax; access via `params` prop
- `layout.tsx` files create layout boundaries; can have sibling `page.tsx`
- Layouts wrap children (pages, nested layouts) and persist across navigation

**2. API Routes**
- Located in `app/api/[route]/routes.ts`
- Export named functions for HTTP methods: `GET`, `POST`, `PUT`, `DELETE`, etc.
- Use `NextResponse` for JSON responses
- Access request body via `request.json()`

**3. Metadata**
- Export `metadata` object from page or layout files (server-only)
- Applies to that page and all nested children (unless overridden)

**4. Client vs Server Components**
- Components are **server components by default**
- Add `"use client"` directive at the top to opt into client-side rendering
- Server components run on the server; client components run in the browser
- Cannot use hooks (useState, useEffect) in server components

**5. Loading States**
- `loading.tsx` file in a directory shows a skeleton UI while the page loads
- Example: `app/users/loading.tsx` displays while `/users` fetches data

### Configuration

**next.config.ts:**
- `remotePatterns` allows images from external domains (e.g., `upload.wikimedia.org`)

**tsconfig.json:**
- Path alias `@/*` points to project root for imports: `import { } from "@/app/..."`
- Strict mode enabled; JSX set to `react-jsx`

## Important Next.js 16 Notes

This version of Next.js has breaking changes from earlier releases. Before writing code:
- **Read the relevant guide** in `node_modules/next/dist/docs/` for the feature you're using
- **Watch for deprecation notices** — APIs and conventions may differ from your training data
- Always check Next.js docs for the correct patterns in version 16.2.6

## Styling

Uses **Tailwind CSS 4** with utility-first approach. Classes applied directly to elements (e.g., `className="flex items-center gap-4"`). Dark mode support via `dark:` prefix (e.g., `dark:bg-black`).

## Import Aliases

Use `@/` to import from project root for cleaner paths:
```typescript
import Link from "@/app/users/link"  // Instead of ../../users/link
```
