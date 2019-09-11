"use strict";

self.addEventListener('install', function(e) {
  console.log('service worker install');
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        './index.html'    
      ]);
    });
  );
});

self.addEventListener('activate', function(e) {
  console.log('service worker activate');
});

self.addEventListener('fetch', function(e) {
  console.log('fetch', e);
});