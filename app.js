const express = require("express");
const app = express();
const dummyEndpointRoutes = require("./api/routes/dummyEndpointRoutes");

// this is a middleware and every request has to pass thrgh this
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "it works",
//   });
// });

app.use("/dummy-endpoint", dummyEndpointRoutes);

module.exports = app;
