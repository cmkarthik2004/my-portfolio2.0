/**
 * Helper to resolve asset URLs correctly across local development,
 * root domains (e.g., https://cm-karthik.github.io/), and repository subpaths
 * (e.g., https://cmkarthik2004.github.io/my-portfolio2.0/).
 */
export function getAssetUrl(path?: string): string {
  if (!path) return '';

  // Leave external links, data URIs, anchor tags, mailto/tel untouched
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Get Vite's configured base URL (defaults to '/' or '/my-portfolio2.0/')
  const base = import.meta.env.BASE_URL || '/';

  // Prevent double-prefixing if already starts with base
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }
  if (base === './' && path.startsWith('./')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
}
