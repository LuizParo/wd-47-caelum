"use strict";function validaCep(){return/^[0-9]{5}(\-|\.)?[0-9]{3}$/.test(prompt("Digite o seu CEP:"))}function validaPlaca(t){if(t)return/^[\A-z]{3}\-?\d{4}$/.exec(t)}function validaTel(t){if(t)return String(t).match(/^(\(?\d{2}\)?\s)?9?\d{4}\-?\d{4}$/)}console.log(validaTel(993114956));