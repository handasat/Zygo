// ייבוא ספריות Firebase
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// אתחול Firebase Admin
admin.initializeApp();

// חיבור ל-Firestore
const db = admin.firestore();

/**
 * פונקציה שמופעלת אוטומטית
 * כשנוצר משתמש חדש ב-collection "users"
 */
exports.onUserCreated = functions.firestore
  .document("users/{userId}")
  .onCreate(async (snapshot, context) => {

    // שליפת נתוני המשתמש
    const userData = snapshot.data();
    const userId = context.params.userId;

    // לוג לבדיקה
    console.log("🟢 User created");
    console.log("User ID:", userId);
    console.log("User data:", userData);

    // ============================
    // כאן בהמשך תכתוב:
    // מה קורה כשנוצר משתמש
    // ============================

    return null;
  });

