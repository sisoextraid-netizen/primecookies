// Service worker minimal: hanya agar aplikasi bisa dipasang. Tidak menyimpan cache, jadi selalu memuat versi terbaru.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
