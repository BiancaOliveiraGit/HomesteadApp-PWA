export default function AddListeners (){

// notificationclose
window.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });
  
  // notificationclick
//   window.addEventListener('notificationclick', function(e) {
//     var notification = e.notification;
//     var primaryKey = notification.data.primaryKey;
//     var action = e.action;
   
//     console.log(e);
  
//     if (action === 'close') {
//       notification.close();
//     } else {
//       clients.openWindow('http://www.example.com');
//       notification.close();
//     }
//   });

// Listen for Notifications
window.addEventListener( 'push', (e) => {
    window.registration.showNotification( e.data.text() )
  });

}