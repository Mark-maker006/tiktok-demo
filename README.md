# TikTok LIVE B-End Demo

Lightweight React + Vite dashboard demo for backend integration.

## Scripts

- `npm run dev`: start local development server on `http://127.0.0.1:6006`
- `npm run build`: create production assets
- `npm run preview`: preview production build locally

## Structure

```text
src/
  app/                  # App bootstrap and root composition
  config/               # Theme tokens and build-time configuration
  features/
    auth/               # Login gate and auth-facing UI
    dashboard/          # Dashboard pages, components, and API adapters
  mocks/                # Temporary mock data before backend APIs are connected
  shared/
    api/                # Shared request client
    components/         # Reusable UI components
    contexts/           # App-level React contexts
    lib/                # Small shared utilities
```

Backend integration should start from `src/features/dashboard/api/dashboardApi.js`.
Set `VITE_API_BASE_URL` in `.env.local` based on `.env.example`.
