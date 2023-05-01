import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBT09B43D8_HUWGAZm_LtbAcQt31o41pF8",
    authDomain: "financedb-ddce7.firebaseapp.com",
    projectId: "financedb-ddce7",
    storageBucket: "financedb-ddce7.appspot.com",
    messagingSenderId: "183153862592",
    appId: "1:183153862592:web:c8b75e4fb7de375e3bca25",
    measurementId: "G-GVG8K54WER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const storage = getStorage(app);
export const db = getFirestore(app);
