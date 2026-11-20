/**
 * Resolve a root-absolute asset URL (e.g. `/assets/foo.png`) against the
 * deployed base path, so `public/` assets keep working when the deck is served
 * from a sub-path such as GitHub Pages (`/repo/`).
 *
 * Vite rewrites asset URLs it can see at build time (markdown `<img src>`,
 * CSS `url()`), but URLs passed around as plain strings (component props,
 * layout frontmatter) need this at runtime.
 */
export function resolveAssetUrl(url: string): string {
  if (!url || !url.startsWith('/'))
    return url
  return import.meta.env.BASE_URL + url.slice(1)
}
