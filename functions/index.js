const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.onUserCreated = functions.firestore
  .document("users/{userId}")
  .onCreate(async (snapshot, context) => {

    const userData = snapshot.data();
    const userId = context.params.userId;

    console.log("🟢 User created");
    console.log("User ID:", userId);
    console.log("User data:", userData);

    await buyTicket(userData);

    return null;
  });

