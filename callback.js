const { readFile, writeFile } = require("fs");

readFile("./folder/first.txt", "utf-8", (err, res) => {
   if (err) {
      console.log(err);
   }
   const first = res;
   readFile("./folder/second.txt", "utf-8", (err, res) => {
      if (err) {
         console.log(err);
      }
      const second = res;
      writeFile(
         "./folder/asyncfile.txt",
         `This is async File ${first} , ${second}`,
         (err, res) => {
            if (err) {
               console.log(err);
            }
            console.log(res);
         }
      );
   });
});
