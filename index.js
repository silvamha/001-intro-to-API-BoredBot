// Import Firebase from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Log In
import {
  getAuth,
  onAuthStateChanged,  
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc, 
  onSnapshot,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  // your configuration
  apiKey: "AIzaSyA-GR-RKh2Pt_GIH3ZhUw1x62aYkNDzBnE",
  authDomain: "my-first-firestore-db-4f59b.firebaseapp.com",
  projectId: "my-first-firestore-db-4f59b",
  storageBucket: "my-first-firestore-db-4f59b.appspot.com",
  messagingSenderId: "663399641575",
  appId: "1:663399641575:web:10fefbc05af2867f9b4d42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function addCityWithGeneratedId(city) {
  const citiesCol = collection(db, "cities");
  try {
    const docRef = await addDoc(citiesCol, city);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function addCityWithId(cityId, city) {
  const cityRef = doc(db, "cities", cityId);

  try {
    await setDoc(cityRef, city);
    console.log("City added with ID: ", cityId);
  } catch (e) {
    console.error("Error adding city: ", e);
  }
}

addCityWithId("newCityId", { name: "Sao Paulo", population: 1000000, country: "Country" });

function listenForCityUpdates(cityId) {
  const cityRef = doc(db, "cities", cityId);

  const unsubscribe = onSnapshot(cityRef, (doc) => {
    if (doc.exists()) {
      console.log("Current data: ", doc.data());
    } else {
      console.log("No such document!");
    }
  });

  // Call `unsubscribe` when you no longer want to listen for changes
}

listenForCityUpdates("newCityId");

