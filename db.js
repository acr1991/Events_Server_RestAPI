const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:events@localhost:5432/postgres";

const db = new Sequelize(databaseURL);

db.sync()
  .then(() => console.log("Database updated"))
  .catch(console.error);

module.exports = db;

// Install sequelize and pg. DONE
// Create a db.js file. DONE
// Inside the file: DONE
// Import sequelize as Sequelize. DONE
// Declare a constant databaseUrl equal to 'postgres://postgres:<password>@localhost:5432/postgres'. Don't forget to set the password! `DONE
// Pass the databaseUrl to new instanced of Sequelize named db. DONE
// Call its sync method, then log a message like "Database connected" DONE
// Add a catch any errors with console.error.DONE
// Export db.DONE
// Import db.js in index.js.
