/*
#######################
####### modules #######
#######################
|=== os ===|
|=== fs ===|
*/
const os = require('node:os');
console.log(os.arch()); // get architecture
console.log(os.homedir()); // get home directory
console.log(os.platform()); // get platform
// 
const fs = require('node:fs');
console.log(fs.readFileSync("./test.txt", "utf8"));