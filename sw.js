self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./style.css","./img/logo192.png"]);
        })
    )
});

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
});

self.addEventListener("push",(event)=>{
    event.waitUntil(
        self.registration.showNotification('Hi there',{
            body:"",
            icon: "img/logo192.png",
        })
    );
});