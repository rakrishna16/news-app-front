import React from "react";
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
// );
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
// );

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_API_KEY),
  authDomain: String(import.meta.env.VITE_AUTH_ADMIN),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_STORAGE_BUCKET),
  messagingSenderId: String(import.meta.env.VITE_MESSAGE_SENDER_ID),
  appId: String(import.meta.env.VITE_APP_ID),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
// Request Notification Permission
export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log("permission:", permission);
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAP_ID,
      });
      
      console.log("FCM Token:", token);
      return token;
    } else {
      console.warn("Notification permission denied");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};
// Listen for Messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Message received: ", payload);
      resolve(payload);
    });
  });

export default messaging;