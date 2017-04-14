var carros = [];
var cars = new Array();

console.log(carros.length, carros.constructor);
console.log(cars.length, cars.constructor);
console.dir(Array.prototype);

carros.push("Gol", "Corsa", "Palio");
carros.unshift("Vectra", "Fox");
carros.pop();
carros.shift();
carros.splice(2, 0, "Fusca");
carros.splice(1, 1);
carros.reverse();

console.log(carros);
