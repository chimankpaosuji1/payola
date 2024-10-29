// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(error => console.log(error));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
