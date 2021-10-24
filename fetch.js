fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = await response.json();
console.log(json);

const data = { titre: "Message de Fetch", contenu: "allo avec Fetch" };
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));
