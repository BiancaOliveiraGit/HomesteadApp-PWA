// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA



const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  // if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  //   // The URL constructor is available in all browsers that support SW.
  //   const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  //   if (publicUrl.origin !== window.location.origin) {
  //     // Our service worker won't work if PUBLIC_URL is on a different origin
  //     // from what our page is served on. This might happen if a CDN is used to
  //     // serve assets; see https://github.com/facebook/create-react-app/issues/2374
  //     return;
  //   }
  if ('serviceWorker' in navigator) {
      
    window.addEventListener('load', (event) => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA' 
          );
          
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        console.log("New ServiceWorker Found");
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.

              console.log('New content is available; please refresh.');

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
/*
// need to copy&paste below code into service-worker.js in the build folder - eachtime after a build
//static cache is handled by workbox only for the App Shell

// SW Version
const version = '1.0';

const appAssets = [
  'images/beans.jpg',
  'images/broc.jpg',
  'images/caps.jpg',
  'images/corn.jpg',
  'images/lettuce.jpg',
  'images/radish.jpg',  
  'images/tomatoe.jpg'
];

// SW Install
self.addEventListener( 'install', e => {
  e.waitUntil(
      caches.open( `static-${version}` )
          .then( cache => cache.addAll(appAssets) )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request).then(response => { 
          // clone the response before it is discarded
          const resClone = response.clone();
          
          caches.open(`static-${version}`).then((cache) => {  
            if(response.url.match("https://homesteadfunctionapp.azurewebsites.net/homestead/api/v1/seasons")) {
              cache.put(event.request,resClone );
            }        
          });
          return response;
        })
      }
    )
  );
});

// Listen for message from client
self.addEventListener('message', e => {

    // Identify the message
    if( e.data === 'update_self' ) {
      self.skipWaiting();
    }
});

// Listen for Notifications
self.addEventListener( 'push', (e) => {
  self.registration.showNotification( e.data.text() )
})

// notificationclose
self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});

// notificationclick
self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;
 
  console.log(e);

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.example.com');
    notification.close();
  }
});

*/