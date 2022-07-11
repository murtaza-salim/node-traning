const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "/subFolder", "test.tsx");
console.log(filePath);

//give base name i.e. file name
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subFolder", "test.tsx");

console.log(absolute);
