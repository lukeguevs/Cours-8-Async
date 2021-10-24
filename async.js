function a() {
  return Promise.resolve("a");
}
async function b() {
  return "b";
}
console.log(a()); // Promise { 'a' }
console.log(b()); // Promise { 'b' }

const wait = async(ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

await wait(1000);
console.log("Message 1");
await wait(1000);
console.log("Message 2");
await wait(1000);
console.log("Message 3");
