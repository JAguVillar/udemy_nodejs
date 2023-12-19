//Seccion 1 - NodeJS basics
// console.log("sñládflañs");

// let fs = require("fs");

// fs.writeFileSync("papa.txt", "dlsa;koasdloasl");

//Seccion 2 - JS - Async & Promises
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer completo");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData;
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("2");
console.log("3");
