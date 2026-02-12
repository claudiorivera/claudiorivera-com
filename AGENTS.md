# AGENTS.md - Development Guidelines

**Repository:** claudiorivera-com (Astro 5 + React 19 Static Site)

This document guides automated agents on how to develop, test, and maintain code in this repository.

---

## Quick Start

```bash
pnpm install              # Install dependencies
pnpm run dev             # Start dev server (http://localhost:3000)
pnpm run build           # Build and type-check
pnpm run check-types     # TypeScript check (no emit)
pnpm run check:fix       # Run Biome linter with auto-fix
```

---

## Build & Deployment Commands

| Command                | Purpose                                  | Output                                               |
| ---------------------- | ---------------------------------------- | ---------------------------------------------------- |
| `pnpm run dev`         | Local development server with HMR        | Runs on `http://localhost:3000`                      |
| `pnpm run build`       | Type-check (`astro check`) + build SSG   | Outputs to `dist/`                                   |
| `pnpm run preview`     | Preview production build locally         | Reads from `dist/`                                   |
| `pnpm run check-types` | TypeScript strict mode validation        | No output on success                                 |
| `pnpm run check:fix`   | Run Biome linter with auto-fix on `src/` | Modifies files in-place                              |
| `pnpm run clean`       | Remove build artifacts and caches        | Deletes: `node_modules`, `.astro`, `.vercel`, `dist` |
| `pnpm run astro`       | Run Astro CLI directly                   | For advanced Astro commands                          |

---

## Code Style & Formatting

### Imports

- **Use direct imports** (not barrel files) to reduce build time:
- **Organize imports** automatically with Biome: Run `pnpm run check:fix`
- **Use path alias** `@/*` for internal imports: `import { cn } from '@/lib/utils'`

### TypeScript

- **Strict mode enabled** (`tsconfig.json` extends `astro/tsconfigs/strict`)
- **Never use `any`** without explicit `// @ts-expect-error` comment
- **Prefer `type` over `interface`** for consistency:

  ```typescript
  // ✅ Good
  type Props = { name: string; age: number };

  // ⚠️ Avoid enums (Biome rule: `noEnum: error`)
  enum Status {
    Active,
    Inactive,
  }
  ```

- **JSX:** React 19 syntax, `jsx: "react-jsx"` (no need to import React)

### Formatting & Linting

- **Use Biome** for formatting and linting (not Prettier/ESLint)
- **Auto-fix before commit:** `pnpm run check:fix`
- **Key Biome rules:**
  - `noDefaultExport: error` - Use named exports (except `.config.*` files)
  - `noEnum: error` - Use union types instead of enums
  - `useConsistentArrayType: warn` - Use generic syntax `Array<T>` (not `T[]`)
  - `useConsistentCurlyBraces: error` - Always use braces in control flow
  - `useSortedClasses: warn` - Keep class names sorted in `cn()`, `clsx()`, `cva()`

### Naming Conventions

| Type            | Pattern                        | Example                              |
| --------------- | ------------------------------ | ------------------------------------ |
| Components      | PascalCase                     | `UserProfile.tsx`, `CardHeader`      |
| Files           | kebab-case                     | `user-profile.tsx`                   |
| Functions/const | camelCase                      | `getUserData()`, `isActive`          |
| Types           | PascalCase                     | `type UserProfile = {...}`           |
| Constants       | UPPER_SNAKE_CASE               | `const API_BASE_URL = '...'`         |
| Booleans        | Prefix with `is`, `has`, `can` | `isLoading`, `hasError`, `canSubmit` |
| CSS classes     | kebab-case                     | `user-card`, `is-active`             |

### Error Handling

- **Always catch errors** in async operations; never ignore Promise rejections

  ```typescript
  // ✅ Good
  try {
    await fetchData();
  } catch (error) {
    console.error("Failed to fetch:", error);
  }

  // ❌ Bad
  fetchData().catch(() => {}); // Silent failure
  ```

- **Use specific error types** when possible
- **Log errors with context** (what operation failed, why it matters)

### React Patterns

- **Functional components only** (no class components)
- **Prefer composition** over prop drilling; use Context for global state
- **Memoization:** Use `React.memo()` only when re-render is expensive (React 19 with Compiler optimizes this)
- **Hooks:** Prefer custom hooks for reusable logic

---

## TailwindCSS & Class Utilities

- **Version:** Tailwind 4 with CSS variables
- **Use `cn()` utility** to merge classes safely:

  ```typescript
  import { cn } from "@/lib/utils";

  const buttonClass = cn(
    "px-4 py-2 rounded",
    isActive && "bg-blue-500",
    disabled && "opacity-50 cursor-not-allowed",
  );
  ```

- **Keep classes sorted** (Biome rule: `useSortedClasses`)

---

## Directory Structure

```
src/
├── components/          # Astro + React components
│   └── ui/             # shadcn/ui components (Button, Card, etc.)
├── pages/              # Astro routes (file-based routing)
│   ├── index.astro     # Homepage
│   ├── blog/[slug].astro
│   ├── [...path].astro # Dynamic routes
│   └── rss.xml.js      # RSS feed
├── content/            # Content collections (Astro 3+)
│   ├── blog/           # Blog posts (MDX/Markdown)
│   ├── music/          # Music entries
│   └── dev/            # Dev projects
├── lib/                # Utility functions (utils.ts, helpers)
├── styles/             # Global CSS
├── consts.ts           # Global constants
└── env.d.ts            # TypeScript ambient declarations
```

---

## Common Agent Tasks

### Running the Dev Server

```bash
pnpm run dev
# Starts Astro dev server with HMR on http://localhost:3000
```

### Checking Types Without Building

```bash
pnpm run check-types
# Fast TypeScript validation; does not output files
```

### Auto-fixing Code Style Issues

```bash
pnpm run check:fix
# Runs Biome linter with auto-fix on src/ directory
```

### Full Build & Type Check

```bash
pnpm run build
# Runs: astro check (type-check all Astro files) → astro build (SSG)
# Outputs to dist/ (commit .vercel cache afterward)
```

### Clean Build

```bash
pnpm run clean
pnpm install  # Reinstall from scratch
pnpm run build
```

---

## Important Notes for Agents

1. **No default exports** - Use named exports to enable tree-shaking and make imports explicit
2. **Content collections** - Blog, music, and dev posts use Astro's content collection API (see `src/content/`)
3. **Import paths** - Always use `@/*` alias for internal code; never use relative paths like `../../`
4. **Biome is strict** - Run `check:fix` before declaring work complete; Biome errors will block builds

---

## Environment & Dependencies

- **Runtime:** Node.js 24
- **Framework:** Astro 5 (SSG) + React 19
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS 4 + Radix UI
- **Linting:** Biome
- **Icons:** Lucide React
- **Content:** MDX for blog posts
- **Deployment:** Vercel with Web Analytics

---

## References

- [Astro Documentation](https://docs.astro.build)
- [Biome Configuration](https://biomejs.dev/reference/configuration/)
- [Biome Rules](./biome.json)
