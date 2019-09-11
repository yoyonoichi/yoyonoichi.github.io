self.addEventListener('install', function(e) {
  console.log('service worker install');
  console.log(e);
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      console.log('cache');
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
  console.log('fetch');
  console.log(e.request.url);
});