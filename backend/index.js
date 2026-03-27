// import path from "path"
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// ✅ Connect MongoDB
const mongoDB = require("./db");
mongoDB();

// ✅ Proper CORS configuration
app.use(cors({
  origin: [
    "http://localhost:3000", // local frontend
    "https://go-food-ful-stack-mern-app.vercel.app" // your Vercel frontend (UPDATE if different)
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Hello World.....!');
});

// ✅ Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});