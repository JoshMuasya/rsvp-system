import { getFirestore } from "@firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBlcydmFxRRr-qin2G0jhVHNBLnDo5-3XY",
    authDomain: "rsvp-dbbef.firebaseapp.com",
    projectId: "rsvp-dbbef",
    storageBucket: "rsvp-dbbef.appspot.com",
    messagingSenderId: "40136726694",
    appId: "1:40136726694:web:115f185ac5c7bc80ad7c67",
    measurementId: "G-70CMEV9GD4"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };