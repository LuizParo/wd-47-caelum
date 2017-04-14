var carro = {
  ano : 2013,
  cor : 'preto',
  fabricante : 'FIAT',
  modelo : 'Uno',
  km : 5635,
  batido : true,
  ligado : false,
  ligar : function() {
    this.ligado = true;
  },
  desligar : function() {
    this.ligar = false;
  }
};

console.log(carro);
