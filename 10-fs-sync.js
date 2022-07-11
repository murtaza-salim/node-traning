const { readFileSync, writeFileSync } = require("fs");

//reeading file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log("start");
//create file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} ,${second}`,
  { flag: "a" }
);

console.log("done with the tast");

console.log("starting the next one");
