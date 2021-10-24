const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Allo");
  }, 300);
});

promise1.then((value) => {
  console.log(value);
});

console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Mon erreur");
  }, 300);
});

promise2.catch((err) => {
  console.log(`L'erreur est : ${err}`);
});

// const wait = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
// wait(1000)
//   .then(() => {
//     console.log("Message 1");
//     return wait(1000);
//   })
//   .then(() => {
//     console.log("Message 2");
//     return wait(1000);
//   })
//   .then(() => {
//     console.log("Message 3");
//   });

const waitMessage = (ms, message) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, ms)
  );
};
waitMessage(1000, "Message 1")
  .then(() => waitMessage(1000, "Message 2"))
  .then(() => waitMessage(1000, "Message 3"));

await waitMessage(1000, "Message 1");
await waitMessage(1000, "Message 2");
await waitMessage(1000, "Message 3");
