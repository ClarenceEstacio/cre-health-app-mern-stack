const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const healthRouter = require("./routes/health");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established.");
// });

app.use("/health", healthRouter);

app.listen(port, () => {
  console.log(`Server is running in port : ${port}`);
});
