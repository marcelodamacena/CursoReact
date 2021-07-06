"use strict";

//ex01
var numeros = [1, 10, 30, 100, 1000];
var total = 0;

for (var index = 0; index < numeros.length; index++) {
  total += numeros[index];
}

var resultado = total / numeros.length;
console.log("A media entre os numeros \xE9: ".concat(Math.round(resultado)));