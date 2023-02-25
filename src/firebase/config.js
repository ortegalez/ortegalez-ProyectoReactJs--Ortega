import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpctsuGYTRiKK0GtgBo15CfjzGgPPhcB4",
  authDomain: "desiree-shop.firebaseapp.com",
  projectId: "desiree-shop",
  storageBucket: "desiree-shop.appspot.com",
  messagingSenderId: "316688414970",
  appId: "1:316688414970:web:f4c5e37148c02a1bdcf143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
  return app;
};
