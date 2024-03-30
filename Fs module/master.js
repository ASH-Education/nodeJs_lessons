const fs = require('node:fs'); // vuiltin module

// read file // *** readFileSync and readFile *** \\
// let fileData = fs.readFileSync('./products.json', "utf-8"); // what is "utf-8"
// console.log("Data file: ", fileData);
let Data_File = fs.readFile('./products.json', "utf8", (error, data) => {
  if (error) {
    return error;
  } else {
    console.log("Data file: ", data);
  }
})
// console.log("fileData: ", Data_File);
// write on file
let writeIn = fs.writeFile('./products.json', JSON.stringify([{"id": "3", "title": "Old_dell"}]), "utf8", (error, data) => {
  error ? console.log(error): console.log("done sent data");
});

// remove file
fs.unlink("./he.drawio", (error) => {
  error ? error : null
})

// node js is non blocking code