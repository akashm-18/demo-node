const { readFile } = require("fs");

const getText = (path) => {
   return new Promise((resolve, reject) => {
      readFile(path, "utf-8", (err, data) => {
         if (err) {
            reject(err);
         }
         resolve(data);
      });
   });
};

const start = async () => {
   try {
      const first = await getText("./folder/first.txt");
      const second = await getText("./folder/second.txt");
      console.log(first, second);
   } catch (err) {
      throw err;
   }
};

start();
