
self.addEventListener('install', function (e) {
  console.log(caches);
  e.waitUntil(
    caches.open('todos').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/node_modules/todomvc-common/base.css',
        '/node_modules/todomvc-app-css/index.css',
        '/node_modules/todomvc-common/base.js',
        '/node_modules/director/build/director.js',
        '/node_modules/vue/dist/vue.js',
        '/node_modules/axios/dist/axios.min.js',
        '/js/store.js',
        '/js/app.js',
        '/js/routes.js',
        '/learn.json'
      ]).then((x) => {
        console.log('O cache acabou!!!!')
        return x
      });
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
