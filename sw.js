
const CACHE_NAME = "gamevault-cache-v4";

const APP_SHELL = [
    "./",
    "./index.html",
    "./offline.html",
    "./css/styles.css",
    "./js/app.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-512.png"
];

// Instalación del Service Worker
self.addEventListener("install", event => {
    console.log("Service Worker: Instalando");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Guardando App Shell en caché");
                return cache.addAll(APP_SHELL);
            })
            .then(() => self.skipWaiting())
    );
});

// Activación y eliminación de cachés anteriores
self.addEventListener("activate", event => {
    console.log("Service Worker: Activado");

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name =>
                            name.startsWith("gamevault-cache-") &&
                            name !== CACHE_NAME
                        )
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Intercepción de peticiones
self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    if (new URL(event.request.url).origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true })
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request)
                    .catch(() => {
                        if (event.request.mode === "navigate") {
                            return caches.match("./offline.html");
                        }

                        return Response.error();
                    });
            })
    );
});
