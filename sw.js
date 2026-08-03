// Minimal service worker — exists mainly to satisfy browser PWA "installable app" criteria
// so the system opens in its own standalone window instead of a browser tab.
// Deliberately does NOT cache anything: this app relies on live/cloud-synced data,
// so every request is always passed straight through to the network.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
