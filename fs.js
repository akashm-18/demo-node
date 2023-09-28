const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./folder/first.txt", "utf-8");
const SecondFile = readFileSync("./folder/second.txt", "utf-8");

console.log(firstFile);
console.log(SecondFile);

const writeText = "This is the third file written by writeFileSync";

writeFileSync(
   "./folder/third.txt",
   `${writeText} : ${firstFile} , ${SecondFile}`,
   { flag: "a" }
);
