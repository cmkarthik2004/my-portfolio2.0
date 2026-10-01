/**
 * Helper to resolve asset URLs correctly across local development,
 * custom domains (https://cmkarthik.me/), and GitHub Pages deployments.
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

  // Get Vite's configured base URL (defaults to '/' for custom domain https://cmkarthik.me/)
  const base = import.meta.env.BASE_URL || '/';

  // Prevent double-prefixing if already starts with base
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }
  if (base === './' && path.startsWith('./')) {
    return path;
  }

  // Strip leading slash or relative prefix
  const cleanPath = path.startsWith('/')
    ? path.slice(1)
    : path.startsWith('./')
      ? path.slice(2)
      : path;
  // Safely encode URI paths to support filenames with spaces (e.g. "my photo.jpeg")
  const encodedPath = encodeURI(decodeURI(cleanPath));

  if (base.endsWith('/')) {
    return `${base}${encodedPath}`;
  }
  return `${base}/${encodedPath}`;
}
