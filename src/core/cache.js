// ✅ src/core/cache.js
const pageCache = {};
const MAX_CACHE_SIZE = 10;

export function hasPage(path) {
  return !!pageCache[path];
}

export function savePage(path, content) {
  const keys = Object.keys(pageCache);

  // Se atingiu o limite, remove a entrada mais antiga
  if (keys.length >= MAX_CACHE_SIZE) {
    delete pageCache[keys[0]];
  }

  pageCache[path] = content;
}

export function getPage(path) {
  return pageCache[path];
}

export function clearCache() {
  Object.keys(pageCache).forEach(key => delete pageCache[key]);
}