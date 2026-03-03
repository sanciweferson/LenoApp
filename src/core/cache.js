

// src/core/cache.js


const pageCache = {};

export function hasPage(path) {
  return !!pageCache[path];
}

export function savePage(path, content) {
  pageCache[path] = content;
}

export function getPage(path) {
  return pageCache[path];
}

export function clearCache() {
  Object.keys(pageCache).forEach(key => delete pageCache[key]);
}