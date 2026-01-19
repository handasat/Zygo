const firebaseConfig = {
  apiKey: "AIzaSyDZVrncvPwEg6IDHjloweJNjrpj32lZy5g",
  authDomain: "zygo-acf32.firebaseapp.com",
  databaseURL: "https://zygo-acf32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zygo-acf32",
  storageBucket: "zygo-acf32.firebasestorage.app",
  messagingSenderId: "243652763597",
  appId: "1:243652763597:web:f9cbc63435193855236e84"
};

firebase.initializeApp(firebaseConfig);

// Realtime Database
const database = firebase.database();

// Firestore
const firestore = firebase.firestore();

const form = document.getElementById("nameForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  // 🔹 שמירה ב-Realtime Database
  database.ref("users").push({
    firstName,
    lastName,
    createdAt: Date.now()
  });

  // 🔹 שמירה ב-Firestore
  firestore.collection("users").add({
    firstName,
    lastName,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  form.reset();
  alert("הנתונים נשמרו בהצלחה גם ב-Realtime DB וגם ב-Firestore!");
});
