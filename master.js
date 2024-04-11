const fs = require("node:fs"); // import file system module
const crypto = require('node:crypto');

// console.log("First line");
// handle by libuv with thread pool
// fs.readFile("./testing/test.txt", "utf8", (err, data) => {
//   console.log("file content", data);
// });

const start = performance.now();

// with Sync ===========================
// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log("end at : ", performance.now() - start);
// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log("end at : ", performance.now() - start);
// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log("end at : ", performance.now() - start);

// without Sync ============thread pool===============
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
// console.log("end at : ", performance.now() - start);
// });
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
// console.log("end at : ", performance.now() - start);
// });
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
// console.log("end at : ", performance.now() - start);
// });
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
// console.log("end at : ", performance.now() - start);
// });