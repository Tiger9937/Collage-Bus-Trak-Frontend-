
self.addEventListener('push', (event) => {
    const data = event.data.json(); 
    console.log('Push received:', data);


    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon, 
    });
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') 
    );
});
