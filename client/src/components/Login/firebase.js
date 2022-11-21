import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp ({
  apiKey: "AIzaSyDrxpeGRVHFgqqBKw_8dTiwYdvq4f40GfA",
  authDomain: "chat-325cc.firebaseapp.com",
  projectId: "chat-325cc",
  storageBucket: "chat-325cc.appspot.com",
  messagingSenderId: "94679692146",
  appId: "1:94679692146:web:65697646157d3c5559e3eb",
  measurementId: "G-4FGW7253TP"
});

export const auth = getAuth();
export default app;

