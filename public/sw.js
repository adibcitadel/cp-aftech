self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/")) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetched = fetch(event.request).then((response) => {
        if (response.ok && event.request.method === "GET") {
          const clone = response.clone();
          caches.open("aftech-v1").then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
      return cached || fetched;
    })
  );
});
