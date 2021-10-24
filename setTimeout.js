setTimeout(() => {
  console.log("Attente de 0 secondes!");
}, 0);
console.log("Affichage après attente!");

setTimeout(() => {
  console.log("Message 1");
}, 5000);
setTimeout(() => {
  console.log("Message 2");
}, 3000);
setTimeout(() => {
  console.log("Message 3");
}, 1000);

setTimeout(() => {
  console.log("Message 1");
  setTimeout(() => {
    console.log("Message 2");
    setTimeout(() => {
      console.log("Message 3");
    }, 1000);
  }, 1000);
}, 1000);
