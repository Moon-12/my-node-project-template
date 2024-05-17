const express = require("express");
const morgan = require("morgan");

const app = express();
const dummyEndpointRoutes = require("./api/routes/dummyEndpointRoutes");

// this is a middleware and every request has to pass thrgh this
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "it works",
//   });
// });

app.use(morgan("dev"));
app.use("/dummy-endpoint", dummyEndpointRoutes);

//handling error

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
