const express = require("express");
const mongoose = require("mongoose");

const app = express();
//const routes = require("../src/Routes/routes");

const cors = require("cors");
const { config } = require("dotenv");

config({
 path: "./.env"
});

app.use(cors({
  origin: "*", // <-- You already added this, but ensure it’s applied BEFORE routes
  methods: ["GET", "POST", "PUT","PATCH","DELETE"],
  allowedHeaders: ["Content-Type", "x-auth-token"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const db = process.env.MONGO_URI;

const startServer = async () => {
try {

  
  await mongoose.connect(db, {
  });
  console.log("SlnkoEnergy database is connected");


//   app.use("/v1", routes);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Slnko app is running on port ${PORT}`);
  });


  process.on("SIGINT", () => {
    console.log("Gracefully shutting down...");
    mongoose.connection.close(() => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
} catch (err) {
  console.error("Failed to start server:", err);
  process.exit(1);
}
};

// Start the server
startServer();