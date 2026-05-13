/**
 * Files must live in `public/assets/` (URL path `/assets/...`).
 * Vite only serves static files from `public/` — folder name is `assets`, not `ssets`.
 */
export function figmaAsset(filename: string): string {
  return `/assets/${filename}`
}

export const ASSETS = {
  /** Hero — matches your export filename/extension */
  hero: 'Image1.jpg',
  benefit1: 'Image5.png',
  benefit2: 'Image6.png',
  benefit3: 'Image7.png',
} as const
