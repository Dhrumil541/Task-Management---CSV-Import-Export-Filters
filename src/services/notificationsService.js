import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const initializeNotifications = () => {
  // Request permission to send notifications
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('%cNotification permission granted.', 'color: green; font-weight: bold;');

      // Get the FCM token
      getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' })
        .then((currentToken) => {
          if (currentToken) {
            console.log('%cFCM Token: ' + currentToken, 'color: blue; font-weight: bold;');
            // Send the token to your server or save it for future use
          } else {
            console.log('%cNo registration token available. Request permission to generate one.', 'color: orange;');
          }
        })
        .catch((err) => {
          console.error('%cAn error occurred while retrieving token: ', 'color: red;', err);
        });
    } else {
      console.log('%cUnable to get permission to notify.', 'color: red; font-weight: bold;');
    }
  });

  // Handle incoming messages when the app is in the foreground
  onMessage(messaging, (payload) => {
    console.log('%cMessage received: ', 'color: purple; font-weight: bold;', payload);
    // Customize notification handling here (e.g., display a toast)
  });
};
