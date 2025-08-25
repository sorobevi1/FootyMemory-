self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("footymemory-cache").then(cache => {
      return cache.addAll([
        "/FootyMemory-/",
        "/FootyMemory-/index.html",
        "/FootyMemory-/styles.css",
        "/FootyMemory-/app.js",
        "/FootyMemory-/manifest.webmanifest"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
