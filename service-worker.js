"use strict";

self.addEventListener('install', function(e) {
  console.log('service worker install');
  
});

self.addEventListener('activate', function(e) {
  console.log('service worker activate');
});

self.addEventListener('fetch', function(e) {});