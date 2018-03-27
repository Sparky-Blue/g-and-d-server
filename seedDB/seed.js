process.env.NODE_ENV = process.env.NODE_ENV || "development";
const DB =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : require("../config/config").DB_URL[process.env.NODE_ENV];
const mongoose = require("mongoose");
const { seedPeople } = require("./utils");

function seedDatabase(DB_URL) {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log(`Connected to ${DB_URL}`);
      return mongoose.connection.db.dropDatabase();
    })
    .catch(err => {
      if (err.code === 26) console.log("collection does not exist");
    })
    .then(() => {
      return seedPeople("seed/data/people.csv");
    })
    .then(() => {
      mongoose.disconnect();
      console.log("disconnected");
    })
    .catch(err => console.log({ err }));
}

seedDatabase(DB);
