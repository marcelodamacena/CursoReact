"use strict";

//ex04
//Usuario
var valorProduto = 33;
var numeroParcela = 5; //Padrão do sistema.

var parcelas = [3, 5];
var acrescimos = [0.1, 0.2];
var valorFinal;

for (var index = 1; index < parcelas.length; index++) {
  // 3 = 3?
  if (numeroParcela == parcelas[index]) {
    // encontramos o valor index correspondente a parcela
    var acrescimo = acrescimos[index] * valorProduto;
    valorFinal = acrescimo + valorProduto;
    break;
  } else {
    console.log('parcela direfente da selecionada ');
  }
}

console.log('Valor do Produto com acrescimo ' + valorFinal);