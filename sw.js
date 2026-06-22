// Cor del Món service worker.
// Caches the network shell on install, serves cached responses immediately
// on repeat loads, and revalidates in the background (stale-while-revalidate).
//
// Bump CACHE_VERSION when you ship a content change you want users to see
// immediately on next reload.
const CACHE_VERSION = 'v5';
const CACHE = `cor-del-mon-${CACHE_VERSION}`;

// Compute the deploy base from the SW's own location so this works at both
// /cor-del-mon/ (current) and /cor-del-mon/ (future) without edits.
const BASE = self.registration.scope;

const SHELL = [
  '',
  '_shared/cor-base.css',
  '_shared/cor-shared-v1.js',
  '_shared/cor-cities.json',
  '_shared/cor-constitution.json',
  'andorra/',
  'yokohama/',
  'adelaide/',
  'valparaiso/',
  'capetown/',
  'jaipur/',
].map(p => BASE + p);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(SHELL).catch(() => undefined))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Same-origin only; skip cross-origin (CDN, fonts) so they go through normal HTTP cache.
  if (url.origin !== location.origin) return;
  // Skip the SW itself so updates always come fresh.
  if (url.pathname.endsWith('/sw.js')) return;

  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(resp => {
        if (resp.ok && resp.type === 'basic') {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return resp;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
