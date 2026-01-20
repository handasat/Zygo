// 🔹 Firebase configuration (חובה!)
const firebaseConfig = {
  apiKey: "AIzaSyDZVrncvPwEg6IDHjloweJNjrpj32lZy5g",
  authDomain: "zygo-acf32.firebaseapp.com",
  databaseURL: "https://zygo-acf32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zygo-acf32",
  storageBucket: "zygo-acf32.firebasestorage.app",
  messagingSenderId: "243652763597",
  appId: "1:243652763597:web:f9cbc63435193855236e84"
};

// 🔹 Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized");

// Realtime Database
const database = firebase.database();

// Firestore
const firestore = firebase.firestore();

const form = document.getElementById("nameForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");

  const userData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phoneNumber: Number(document.getElementById("phoneNumber").value),
    birthDate: document.getElementById("birthDate").value,
    gender: document.getElementById("gender").value,
    instagram: document.getElementById("instagram").value,
    ID: Number(document.getElementById("ID").value),
    creditCardNumber: Number(document.getElementById("creditCardNumber").value),
    expire: document.getElementById("expire").value,
    cvv: Number(document.getElementById("cvv").value),
    createdAt: Date.now()
  };

  // 🔹 Realtime Database
  database.ref("users").push(userData);

  // 🔹 Firestore
  firestore.collection("users").add({
    ...userData,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  form.reset();
  alert("כל הנתונים נשמרו בהצלחה!");
});
