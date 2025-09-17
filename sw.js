// Service Worker 비활성화됨 - 캐시 문제 해결을 위해
// 이 파일은 캐시를 사용하지 않도록 설정되어 있습니다.

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // 캐시 사용하지 않고 항상 네트워크에서 가져오기
  event.respondWith(fetch(event.request));
});