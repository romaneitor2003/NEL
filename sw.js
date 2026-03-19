const CACHE_NAME = 'nel-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  'https://preview.redd.it/i-colored-the-nel-teams-logos-based-off-their-irls-v0-m3oef6yj78da1.png?width=1080&crop=smart&auto=webp&s=39dbafdb651a5c9d5d73440fc7a881e0b94d10cd',
  'https://preview.redd.it/i-colored-the-nel-teams-logos-based-off-their-irls-v0-bbbeh6yj78da1.png?width=1000&format=png&auto=webp&s=e9ac61717f0bd20c5547664b6fc4fa7bd64daaaa',
  'https://preview.redd.it/i-colored-the-nel-teams-logos-based-off-their-irls-v0-eixt0iyj78da1.png?width=1000&format=png&auto=webp&s=b690342039b1b9b22f01a46834d9513470627e5c',
  'https://preview.redd.it/i-colored-the-nel-teams-logos-based-off-their-irls-v0-gfj393yj78da1.png?width=1000&format=png&auto=webp&s=a904cee072e100ccd8af7cb305ee471603af5684',
  'https://preview.redd.it/i-colored-the-nel-teams-logos-based-off-their-irls-v0-xv53q3yj78da1.png?width=1000&format=png&auto=webp&s=ae3863d954ef3a65d91500da44eaadc1651bf0bb'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Error al cachear:', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/index.html')) // fallback
  );
});