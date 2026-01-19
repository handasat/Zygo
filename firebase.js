const firebaseConfig = {
  apiKey: "AIzaSyDZVrncvPwEg6IDHjloweJNjrpj32lZy5g",
  authDomain: "zygo-acf32.firebaseapp.com",
  databaseURL: "https://zygo-acf32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zygo-acf32",
  storageBucket: "zygo-acf32.firebasestorage.app",
  messagingSenderId: "243652763597",
  appId: "1:243652763597:web:f9cbc63435193855236e84",
  measurementId: "G-NLS5ZK08JZ"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const form = document.getElementById("nameForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  database.ref("users").push({
    firstName: firstName,
    lastName: lastName,
    createdAt: Date.now()
  });

  form.reset();

  alert("הנתונים נשמרו בהצלחה!");
});
