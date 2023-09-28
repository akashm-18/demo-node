const path = require("path");

console.log(path.sep);

// Joining the path ..

const filePath = path.join("/folder", "subFolder", "test.txt");
// const filePath = path.join("/folder", "subFolder", "test.txt");   If we add Extra forward slas it will not be consisdered
console.log(filePath);

// Getting the base file of the filePath
const baseFile = path.basename(filePath);
console.log(baseFile);

// Getting the absolute path
const absolute = path.resolve(__dirname); // Output : C:\Users\AKASH M\OneDrive\Desktop\New folder\codingAddict-Nodejs
console.log(absolute); // Only gives the path of the Folder

// Getting the current path
const currentPath = path.resolve(__dirname, "folder", "subFolder", "test.txt"); // Gives the current file
console.log(currentPath); // C:\Users\AKASH M\OneDrive\Desktop\New folder\codingAddict-Nodejs\folder\subFolder\test.txt
