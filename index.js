// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  // your configuration
  apiKey: "AIzaSyBQH1IICRcR5y_nD_iC6eZRlZMbmuQt9LI",
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

addCityWithId("newCityId", {
  name: "Flordiablanca",
  population: 12350,
  country: "Country",
});

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

// ***** Study and understand these concepts*******************

function iterateObject(obj) {
  for (let key in obj) {
    console.log(`Key:, ${key}, Value:, ${obj[key]}`);
  }
}

const studentObj = [
  {
    name: "John",
    age: 16,
    scores: {
      maths: 74,
      english: 63,
      science: 85,
    },
  },

  {
    name: "Mark",
    age: 21,
    scores: {
      math: 84,
      english: 69,
      science: 95,
    },
  },
];



const person = { name: 'Alice', age: 25 };
for (let key in person) {
    console.log(key); // Outputs: 'name', 'age'
}


const numbers = [10, 20, 30];
for (let number of numbers) {
    console.log(number); // Outputs: 10, 20, 30
}





const data = [
  { 
      name: "Irene",
      favoriteColor: "blue", 
      maritalStatus: "looking",
      details: { 
          age: 29, 
          location: "Taiwan" 
      }
  },
  { 
      name: "Monica", 
      favoriteColor: "red",
      maritalStatus: "married",
      details: { 
          age: 45, 
          location: "Colombia" 
      }
  }
];

for (let key in obj) {
  console.log(key);
}