automation/run.js
const { buyTicket } = require("./buyTicket");

async function run() {
  console.log("▶️ Manual run started");

  // נתוני דמו (או מה שתרצה)
  const fakeUser = {
    firstName: "Demo",
    lastName: "User",
    email: "demo@test.com"
  };

  await buyTicket(fakeUser);

  console.log("✅ Manual run finished");
}

// זה הקו הקריטי
run();
