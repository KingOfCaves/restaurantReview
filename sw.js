var cacheVersion = "v1";

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
    .open(`restaurant-${cacheVersion}`)
    .then((cache) => {
      return cache.addAll([
        "/",
        "/css/styles.css",
        "/js/dbhelper.js",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/js/sw_reg.js",
        "/data/restaurants.json",
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg"
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response)=> {
        return response || fetch(event.request).then((fetched)=>{
          return caches.open(`restaurant-${cacheVersion}`).then((cache)=>{
            cache.put(event.request, fetched.clone());
            return fetched;
          })
        });
      })
      .catch((err)=>{
        console.log(err)
        return new Response("Sorry, something seemed to have gone wrong. Check console for more info.");
      })
  );
});