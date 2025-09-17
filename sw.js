const CACHE_NAME = 'tarot-app-v3';
const urlsToCache = [
  '/tarot/',
  '/tarot/index.html',
  '/tarot/manifest.json',
  '/tarot/cards/major/0. 바보 카드.jpg',
  '/tarot/cards/major/1. 마법사 카드.jpg',
  '/tarot/cards/major/2. 여사제 카드.jpg',
  '/tarot/cards/major/3. 여황제 카드.jpg',
  '/tarot/cards/major/4. 황제 카드.jpg',
  '/tarot/cards/major/5. 교황 카드.jpg',
  '/tarot/cards/major/6. 연인 카드.jpg',
  '/tarot/cards/major/7. 전차 카드.jpg',
  '/tarot/cards/major/8. 힘 카드.jpg',
  '/tarot/cards/major/9. 은둔자 카드.jpg',
  '/tarot/cards/major/10. 운명의 수레바퀴.jpg',
  '/tarot/cards/major/11. 정의 카드.jpg',
  '/tarot/cards/major/12. 행맨 카드.jpg',
  '/tarot/cards/major/13. 죽음 카드.jpg',
  '/tarot/cards/major/14. 절제 카드.jpg',
  '/tarot/cards/major/15. 악마 카드.jpg',
  '/tarot/cards/major/16. 타워 카드.jpg',
  '/tarot/cards/major/17. 별 카드.jpg',
  '/tarot/cards/major/18. 달 카드.jpg',
  '/tarot/cards/major/19. 태양 카드.jpg',
  '/tarot/cards/major/20. 심판 카드.jpg',
  '/tarot/cards/major/21. 세계 카드.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
