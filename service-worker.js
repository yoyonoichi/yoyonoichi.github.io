this.addEventListener('install', function(e) {
  //console.log('service worker install', e);
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      //console.log('cache');
      return cache.addAll([
        '/index.html',
        '/js/main.89c19c4e9b69a833aed9.js',
        '/css/main.6cd85c63120b6d0833c3.css',
        '/puzzles/precure01.jpg'
      ]);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('service worker activate');
});

self.addEventListener('fetch', function(e) {
  console.log('fetch', e);
});