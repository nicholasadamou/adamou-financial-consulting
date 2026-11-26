# <img src="apps/site/public/assets/afin-favicon.svg" alt="" height="64" /> Afin · Adamou Financial Consulting

<img src="apps/site/public/assets/afin-social.png" alt="Afin — Less money stress. More possibility." width="1280" />

[![CI](https://img.shields.io/github/actions/workflow/status/nicholasadamou/adamou-financial-consulting/ci.yml?branch=main&label=CI&labelColor=204F60)](https://github.com/nicholasadamou/adamou-financial-consulting/actions/workflows/ci.yml)
![Astro](https://img.shields.io/badge/Astro-204F60?labelColor=204F60&logoColor=F7F4EB&logo=astro)
![React](https://img.shields.io/badge/React-204F60?labelColor=204F60&logoColor=F7F4EB&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-204F60?labelColor=204F60&logoColor=F7F4EB&logo=typescript)
![Bun](https://img.shields.io/badge/Bun-204F60?labelColor=204F60&logoColor=F7F4EB&logo=bun)
![Flox](https://img.shields.io/badge/Flox-204F60?labelColor=204F60&logoColor=F7F4EB&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIj48cGF0aCBkPSJNMjE1LjQ5OCAxNkgxMDAuMjczTDQ0IDczLjE2NjZWMTMwLjMzM0gxMDEuMTY2TDIxNS40OTggNzMuMTY2NlYxNlpNMTAxLjE2NyAxMzAuMzM0SDIxNS40OTlWMTg3LjUwMUgxMDEuMTY3VjEzMC4zMzRaTTQ0IDE4Ny41MTNIMTAxLjE2NlYyNDQuNjc5SDQ0VjE4Ny41MTNaIiBmaWxsPSIjRjdGNEVCIi8%2BPC9zdmc%2B)
[![License](https://img.shields.io/badge/License-PolyForm_Shield_1.0.0-204F60?labelColor=204F60)](LICENSE)

Afin combines Matt Adamou’s financial coaching website with a separate private
client workspace. The public site includes sixteen calculators, service guides,
and an intake form. The workspace manages client records, goals, and follow-ups
with Supabase access controls.

[Visit Afin](https://adamou-financial-consulting.vercel.app/)

## Getting started

```sh
flox activate
bun install --frozen-lockfile
bun run dev
```

## Documentation

- [Documentation](docs/README.md): client guidance and project reference.
- [Getting started and local verification](docs/development.md): Flox, previews, tests, and visual checks.
- [Private workspace](docs/workspace.md): Supabase setup, access controls, and client workflows.
- [Intake](docs/intake.md): email drafts and optional Formspree delivery.
- [Brand assets](docs/brand.md): the mountain mark, palette, and image credits.
- [Deployment](docs/deployment.md): Vercel hosting and analytics.

## Local verification

Run `./scripts/check.sh` inside Flox with Docker running. It checks formatting,
documentation, types, unit tests, production builds, browser journeys, and visual
regressions. The pre-commit hook and GitHub Actions use the same entry point.

See [development](docs/development.md) for browser installation, the private
workspace preview, and choosing a free test port.

## License

Copyright © 2026 Nicholas Adamou.

The project is licensed under [PolyForm Shield License 1.0.0](LICENSE).
