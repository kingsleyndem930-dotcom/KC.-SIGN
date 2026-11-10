// Bump CACHE when you change app files so users get the update.
const CACHE = "kcsign-v2";
const FILES = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // Videos and the clip list always come from the network (videos are large).
  if (url.pathname.includes("/clips/")) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
