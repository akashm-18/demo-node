const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
   try {
      const first = await readFile("./folder/first.txt", "utf-8");
      const second = await readFile("./folder/second.txt", "utf-8");
      console.log(first);
      console.log(second);
      await writeFile(
         "./folder/writeawait.txt",
         `This is written using the async await`,
         { flag: "a" }
      );
   } catch (err) {
      console.log(err);
   }
};

start();
