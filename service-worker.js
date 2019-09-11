const CACHENAME = 'kids-puzzle-v1';

self.addEventListener('install', function(e) {
  console.log('service worker install');
  e.waitUntil(
    caches.open(CACHENAME).then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/js/main.89c19c4e9b69a833aed9.js',
        '/css/main.6cd85c63120b6d0833c3.css',
        '/images/b8c72eb3b354ec22de12e2fb82acfea8.woff',
        '/images/9c9c9594083c7803650bca0f43f2b326.gif',
        '/puzzles/precure01.jpg',
        '/puzzles/precure02.jpg'
      ]);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('service worker activate');
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(res) {
      console.log('fetch: '+e.request.url);
      return res || fetch(e.request).then(function(response) {
        return caches.open(CACHENAME).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  )
});