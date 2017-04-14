console.log(window.document);
console.log(window.document.head);
console.log(window.document.body);

function $(element) {
  var x = document.querySelectorAll(element);
  return x.length == 1 ? x[0] : x;
}
