// import modules
const express = require("express");
const fs = require("node:fs");

const app = express();
// const homePage = fs.readFileSync("./app/index.html", "utf8"); // false syntax
app.use(express.static("./app")); // this is medelware => import all static files

// make function logger
// const logger = (req) => {
//   console.log(`Path: ${req.url}, Method: ${req.method}`);
// }

// start handling medelware
const logger = (req, res, next) => {
  console.log(`Path: ${req.url}, Method: ${req.method}`);
  next(); // after execution end go to next function
};

app.use(logger);

app.get("/", (req, resp) => {
  // logger(req);
  resp.send(homePage);
});
app.get("/dashboard", (req, resp) => {
  // logger(req);
  resp.send("<h1>welcome to dashboard page</h1>");
});
app.get("/user", (req, resp) => {
  // logger(req);
  resp.send("hello user in dashboard page");
});
app.get("/contact", (req, resp) => {
  // logger(req);
  resp.send("<h1>welcome to contact page</h1>");
});
app.get("/aboutus", (req, resp) => {
  // logger(req);
  resp.send("<h1>welcome to aboutus page</h1>");
});
app.get("/json", (req, resp) => {
  // logger(req);
  resp.send([
    { id: 1, name: "hello world" },
    { id: 2, name: "hello two" },
  ]);
});

// port domain local;
app.listen("1000", () => {
  console.log("listen on port 1000");
});
