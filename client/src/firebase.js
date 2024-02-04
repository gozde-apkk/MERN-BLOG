// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV_H7qAd-w-JatwvOMlatTQhATyhqFUUU",
  authDomain: "mern-blo-61f76.firebaseapp.com",
  projectId: "mern-blo-61f76",
  storageBucket: "mern-blo-61f76.appspot.com",
  messagingSenderId: "796862695408",
  appId: "1:796862695408:web:a29581564c19c5cf32ff35",
  measurementId: "G-PYCNJR62EC"
};
{
  "firebase"; {
    "functions";{
      "predeploy"; [
        "npm --prefix \"$RESOURCE_DIR\" run lint",
        "npm --prefix \"$RESOURCE_DIR\" run build"
      ]
    }
    "hosting"; {
      "public"; "public",
      "ignore"; [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    }
    "firestore"; {
      "rules"; "firestore.rules",
      "indexes"; "firestore.indexes.json"
    }
    "storage"; {
      "rules"; "storage.rules"
    }
  }
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);