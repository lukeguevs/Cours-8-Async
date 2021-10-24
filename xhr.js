const xhr = new window.XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === window.XMLHttpRequest.DONE) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  }
});
xhr.send();

const xhr = new window.XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/json");
const data = { titre: "Message de XHR", contenu: "allo" };
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === window.XMLHttpRequest.DONE) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  }
});
xhr.send(JSON.stringify(data));
