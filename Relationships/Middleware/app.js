const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
// Middleware -> Request -> Response
// app.use((req, res, next) => {
//   console.log("Hii I am  1st Middleware ");
//   next(); // to move to next middleware or route handler
//   console.log("This will after next()");
//   //   let { query } = req.query;
//   //   console.log(query);

//   //   res.send("Middleware finished");
// });
// app.use((req, res, next) => {
//   console.log("Hii I am 2nd Middleware ");
//   next();
// });

//logger -> morgan

// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

// app.use("/random", (req, res, next) => {
//   console.log("Hii I am only for random route");
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  // res.send("ACCESS DENIED");
  throw new ExpressError(401, "ACCESS DENIED"); // throw new Express("ACCESS DENIED");
};

// console.log("----ERROR----");
// next(err);
// res.send(err);

// app.use((err, req, res, next) => {
//   console.log("----ERROR2 Middleware----");
//   next(err);
// });

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hii I am root");
});

app.get("/random", (req, res) => {
  res.send("Random Page");
});
app.get("/err", (req, res) => {
  abcd = abcd;
});
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "You are not an Admin");
});
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
  // console.log("----ERROR----");
  // next(err);

  // res.send(err);
});
// app.use((req, res) => {
//   res.status(404).send("404 Page Not Found");
// });
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
