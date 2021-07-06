"use strict";

//ex03
var A = 1;
var B = 1;

if (typeof A != 'number' && typeof B != 'number') {
  console.log('O tipos devem ser number');
} else {
  var C;
  console.log('o tipo são numeros ');

  if (A == B) {
    C = A + B;
  } else {
    C = A + B;
  }

  console.log('O Resultado é: ' + C);
}