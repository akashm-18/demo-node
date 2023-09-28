const { readFile } = require("fs");

const getText = () => {
   return new Promise((resolve, reject) => {
      readFile("./folder/first.txt", "utf-8", (data, err) => {
         if (err) {
            reject(err);
         }
         resolve(data);
      });
   });
};

getText()
   .then((result) => console.log(result))
   .catch((err) => console.log(err));
