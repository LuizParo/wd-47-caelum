(function() {
  'use strict';

  function Conta(agencia, numero, digito, saldo, tipo) {
    this._agencia = agencia || 0;
    this._numero = numero || 0;
    this._digito = digito || 0;
    this._saldo = saldo || 0;
    this._tipo = tipo || '';
  }

  Conta.prototype.getAgencia = function() {
    return this._agencia;
  };

  Conta.prototype.getNumero = function() {
    return this._numero;
  };

  Conta.prototype.getDigito = function() {
    return this._digito;
  };

  Conta.prototype.sacar = function(valor) {
    if(valor < this._saldo) {
      return this._saldo -= valor;
    }

    return valor;
  };

  Conta.prototype.depositar = function(valor) {
    return this._saldo += valor;
  };

  Conta.prototype.extrato = function() {
    return this._saldo;
  };

  Conta.prototype.tranferir = function(valor, conta) {
    if(conta instanceof Conta) {
      this.sacar(valor);
      conta.depositar(valor);
    }
  };

  var conta = new Conta(1065, 5062, 0, 5000, 'CC');
  console.log(conta.sacar(500));

}());

String.prototype.stripTags = function() {
  return this.replace(/\<\/?\w+\/?>/gmi, '');
};

String.prototype.bold = function() {
  return `<strong>${this}</strong>`;
};
