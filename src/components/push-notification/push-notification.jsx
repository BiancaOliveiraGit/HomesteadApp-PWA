import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import './push-notification.css'

// documentation https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications

const PushNotifications = () => {

  // Push Server url
 // const serverUrl = 'http://localhost:3333'

  // Vapid Public Key will need to move to protected function call
  const publicKey = 'BFFg9Q53bE9E9Nn6x99ZbVM6ayHD2Zn87clDw7HGlkR1wQxRFHu79FLeNl2u5RQv46NJhIwVUvtk5M6UThaa9xE'
  
  // state
  const [isSubscribed, setIsSubscribed] = useState(false);  
  const [serviceworker, setServiceworker] = useState();  

    useEffect(() => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration('/app').then(function(registration) {
            if(registration){
              console.log('ServiceWorkerRegistration found.');  
              setServiceworker(registration);
              // Check if a subscription exists, and if so, update state
              registration.pushManager.getSubscription().then(function(subscrib) {
                if(subscrib === null) {
                  console.log('Not subscribed to push service!');
                  setIsSubscribed(false);
                  // TODO adviser user to subcribe
                  //subscribe();
                }else{
                  console.log('Subscription object: ', subscrib);
                  setIsSubscribed(true);
                }               
              })             
            }
          });
    }else {
      setIsSubscribed(false);
      setServiceworker();
    }
  },[isSubscribed]);
   
const SetSubscription = () => {
  if(serviceworker){
    if(!isSubscribed){
      // try to subscribe
      subscribe();
    }else{
      unsubscribe();
    }
  }else{
    setIsSubscribed(false);
    console.log('need to be online to subscribe to push notifications');
    // TODO disable button when offline
  }
}


// Unsubscribe from push service
const unsubscribe = () => {
  // Unsubscribe & update UI
  serviceworker.pushManager.getSubscription().then( subscription => {
    subscription.unsubscribe().then( () => {
      setIsSubscribed(false)
    })
  })
}

/*
const getApplicationServerKey = () => {
  // Fetch from server
  return fetch(`${serverUrl}/key`)
    // Parse response body as arrayBuffer
    .then( res => res.arrayBuffer() )
    // Return arrayBuffer as new UInt8Array
    .then( key => new Uint8Array(key) )
}
*/
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Subscribe for push notifications
const subscribe = () => {
  // Check registration is available
  if ( !serviceworker ) return console.error('Service Worker Registration Not Found')

  // Get applicationServerKey from push server
  //getApplicationServerKey().then( applicationServerKey => {

    // Subscribe
    serviceworker.pushManager.subscribe( {userVisibleOnly: true, applicationServerKey: urlB64ToUint8Array(publicKey)} )
      .then( res => res.toJSON() )
      .then( subscription => {
        console.log('Endpoint URL: ', subscription.endpoint);
        setIsSubscribed(true);
        // TODO Pass subscription to Azure server to store subscribtion
        /*fetch(`${serverUrl}/subscribe`, { method: 'POST', body: JSON.stringify(subscription) })
          .then(setIsSubscribed)
          .catch(unsubscribe)*/

      // Catch subscription error
    }).catch(console.error)
  };//)
//}

//Notification Listeners
    return(
        <div className='subscribe'>
            <Button id="subscribe-btn" variant={isSubscribed? "success" : "warning"} 
            onClick={SetSubscription}>
            {isSubscribed ? 'subscribed' : 'unsubscribed'}
            
            </Button>
        </div>
    )
};
export default PushNotifications;

/*
  TODO
  [x] css file
  [x] useEffect for changing state
  [x] button event
  [] disable button ?

    UPTO
    [] Display notifications
*/

/*
{
  "subject": "mailto:biancaoliveira.apps@gmail.com",
  "publicKey": "BFFg9Q53bE9E9Nn6x99ZbVM6ayHD2Zn87clDw7HGlkR1wQxRFHu79FLeNl2u5RQv46NJhIwVUvtk5M6UThaa9xE",
  "privateKey": "Rx9ull8PvAHiOnWzmjQC2F1-RFIiSQ3rTW4TKeFIchU"
}
*/

