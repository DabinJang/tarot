const CACHE_NAME = 'tarot-app-v5-deck-selection-first';
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
  '/tarot/cards/major/21. 세계 카드.jpg',
  // Wand cards
  '/tarot/cards/wand/완드 에이스.jpg',
  '/tarot/cards/wand/완드2.jpg',
  '/tarot/cards/wand/완드3.jpg',
  '/tarot/cards/wand/완드4.jpg',
  '/tarot/cards/wand/완드5.jpg',
  '/tarot/cards/wand/완드6.jpg',
  '/tarot/cards/wand/완드7.jpg',
  '/tarot/cards/wand/완드8.jpg',
  '/tarot/cards/wand/완드9.jpg',
  '/tarot/cards/wand/완드10.jpg',
  '/tarot/cards/wand/완드 페이지.jpg',
  '/tarot/cards/wand/완드 나이트.jpg',
  '/tarot/cards/wand/완드 퀸.jpg',
  '/tarot/cards/wand/완드 킹.jpg',
  // Cup cards
  '/tarot/cards/cup/컵 에이스.jpg',
  '/tarot/cards/cup/컵2.jpg',
  '/tarot/cards/cup/컵3.jpg',
  '/tarot/cards/cup/컵4.jpg',
  '/tarot/cards/cup/컵5.jpg',
  '/tarot/cards/cup/컵6.jpg',
  '/tarot/cards/cup/컵7.jpg',
  '/tarot/cards/cup/컵8.jpg',
  '/tarot/cards/cup/컵9.jpg',
  '/tarot/cards/cup/컵10.jpg',
  '/tarot/cards/cup/컵 페이지.jpg',
  '/tarot/cards/cup/컵 나이트.jpg',
  '/tarot/cards/cup/컵 퀸.jpg',
  '/tarot/cards/cup/컵 킹.jpg',
  // Sword cards
  '/tarot/cards/sword/소드 에이스.jpg',
  '/tarot/cards/sword/소드2.jpg',
  '/tarot/cards/sword/소드3.jpg',
  '/tarot/cards/sword/소드4.jpg',
  '/tarot/cards/sword/소드5.jpg',
  '/tarot/cards/sword/소드6.jpg',
  '/tarot/cards/sword/소드7.jpg',
  '/tarot/cards/sword/소드8.jpg',
  '/tarot/cards/sword/소드9.jpg',
  '/tarot/cards/sword/소드10.jpg',
  '/tarot/cards/sword/소드 페이지.jpg',
  '/tarot/cards/sword/소드 나이트.jpg',
  '/tarot/cards/sword/소드 퀸.jpg',
  '/tarot/cards/sword/소드 킹.jpg',
  // Pentacle cards
  '/tarot/cards/pentacle/펜타클 에이스.jpg',
  '/tarot/cards/pentacle/펜타클2.jpg',
  '/tarot/cards/pentacle/펜타클3.jpg',
  '/tarot/cards/pentacle/펜타클4.jpg',
  '/tarot/cards/pentacle/펜타클5.jpg',
  '/tarot/cards/pentacle/펜타클6.jpg',
  '/tarot/cards/pentacle/펜타클7.jpg',
  '/tarot/cards/pentacle/펜타클8.jpg',
  '/tarot/cards/pentacle/펜타클9.jpg',
  '/tarot/cards/pentacle/펜타클10.jpg',
  '/tarot/cards/pentacle/펜타클 페이지.jpg',
  '/tarot/cards/pentacle/펜타클 나이트.jpg',
  '/tarot/cards/pentacle/펜타클 퀸.jpg',
  '/tarot/cards/pentacle/펜타클 킹.jpg'
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
          // 모든 이전 캐시 삭제 (강제 업데이트)
          return caches.delete(cacheName);
        })
      );
    }).then(function() {
      // 새 캐시 생성
      return caches.open(CACHE_NAME);
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
