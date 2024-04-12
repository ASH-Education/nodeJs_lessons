// node js hava a builtin server not have to import any server out

const http = require("node:http"); // http server module

// node server
const serv = http.createServer((req, res) => {
  res.end("end server");
  if (res.end("/")) {
    console.log("welcom to home page");
  } else if (res.end("/skills")) {
    console.log("skills js ts css sass scss");
  }
})

serv.listen(1000, () => {
  console.log("listen server on post 1000");
})