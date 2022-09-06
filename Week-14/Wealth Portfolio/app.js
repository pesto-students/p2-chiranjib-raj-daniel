const express = require("express");
const cors = require("cors");
const userRoutes = require("./router/userRoutes");
const incomeExpenseRoutes = require("./router/inconeExpenseRoutes");
const app = express();
// app.use(cors)
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use("/api/v1", incomeExpenseRoutes);

module.exports = app;
