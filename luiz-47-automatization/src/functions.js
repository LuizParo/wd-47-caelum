function mensagem() {
  var frase = "Ensino e Inovação...";
  alert(frase);
  return frase;
}

var message = function() {
  return "hello";
}

function soma(... params) {
  return params.reduce((total, valor) => total + valor);
}
