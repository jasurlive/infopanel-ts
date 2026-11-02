# Train Infopanel (React 19 + TypeScript + Vite)

Full-screen info display (any screen size, no scrolling) for a train car: header (train, car, clock, next stop),
rotating slides (info cards + city videos) and a scrolling ticker at the bottom.

```
src/
├── app/                    entry: main.tsx, App.tsx (routes), env.d.ts
└── tools/
    ├── pages/             Home (rotating slides), NotFound
    ├── components/        Layout, Header, ErrorBoundary
    ├── shared/            Marquee (bottom ticker)
    ├── hooks/
    │   ├── GET/           useSensors (live speed / temperature, socket.io)
    │   └── LOCAL/         useClock, useRotate
    ├── lib/content.ts     ALL panel text: train info, slides, ticker
    └── css/               reset, theme, page, layout, home
public/
├── bg.jpg, favicon.png
└── video/                 samarkand.mp4, bukhara.mp4, tashkent.mp4 (not in git)
```

## Run

```bash
npm install
cp .env.example .env
npm run dev          # http://localhost:1212
```

Copy the videos into `public/video/` by hand. They are too large for git.

| Command | Does |
| --- | --- |
| `npm run dev` | dev server |
| `npm run build` | typecheck + production build to `dist/` |
| `npm run typecheck` | `tsc -b` |
| `npm run lint` | oxlint |

## Change what's shown

Edit `src/tools/lib/content.ts` only.

- `train`: header text
- `slides`: add `{ title, icon, text }` for an info card or `{ title, video: '/video/x.mp4' }` for a video
- `marquee`: ticker lines
- `SLIDE_SECONDS`: time per slide

Icons: https://react-icons.github.io/react-icons/

## Live speed / temperature

`hooks/GET/useSensors.ts` is ready but not shown on screen yet. Set the URLs in `.env`, then use it anywhere:

```tsx
const { speed, temperature } = useSensors()
```

## Add an env variable

1. `.env` and `.env.example`: `VITE_MY_VAR=value` (must start with `VITE_`)
2. `src/app/env.d.ts`: add `readonly VITE_MY_VAR: string`
3. Use it: `import.meta.env.VITE_MY_VAR`

## Sizing

Fills any screen without scrolling. Sizes scale with the screen (`vmin` units in `css/layout.css` and `css/home.css`).
On a portrait screen the header becomes 2×2. On a short screen the icon / video shrinks first, the text stays readable.
A missing video file is hidden instead of showing a broken player.
