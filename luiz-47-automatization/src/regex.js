/*
CEP: ^[0-9]{5}(\-|\.)?[0-9]{3}$
Placa: ^[\A-z]{3}\-?\d{4}$
Telefone: ^(\(?\d{2}\)?\s)?9?\d{4}\-?\d{4}$
*/

function validaCep() {
  var cep = prompt("Digite o seu CEP:");
  return /^[0-9]{5}(\-|\.)?[0-9]{3}$/.test(cep);
}

function validaPlaca(placa) {
  if(!placa) return;

  return /^[\A-z]{3}\-?\d{4}$/.exec(placa);
}

function validaTel(telefone) {
  if(!telefone) return;

  return String(telefone).match(/^(\(?\d{2}\)?\s)?9?\d{4}\-?\d{4}$/);
}

console.log(validaTel(993114956));
