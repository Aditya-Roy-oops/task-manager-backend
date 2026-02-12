require("dotenv").config();
const app = require("./app");
const initTables = require("./config/initTables");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await initTables(); // create tables automatically in Railway
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
})();
