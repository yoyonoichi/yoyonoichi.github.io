const CACHENAME = 'kids-puzzle-v4';

self.addEventListener('install', function(e) {
  
  console.log('service worker install');
  
  e.waitUntil(
    caches.open(CACHENAME).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(res) {
      
      console.log('fetch: ' + e.request.url);
      
      return res || fetch(e.request).then(function(response) {
        return caches.open(CACHENAME).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    }).catch(function(err) {
      console.log(err);
    })
  )
});

self.addEventListener('activate', function(e) {
  
  console.log('service worker activate');
  
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        
        console.log('cache key: ' + key);
        
        if(key !== CACHENAME) {
          return caches.delete(key);
        }
      }));
    })
  )
});