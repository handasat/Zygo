firebase.initializeApp(firebaseConfig);

// Realtime Database
const database = firebase.database();

// Firestore
const firestore = firebase.firestore();

const form = document.getElementById("nameForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

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
