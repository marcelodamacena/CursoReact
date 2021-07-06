"use strict";

//ex04
//Usuario
var valorProduto = 33;
var numeroParcela = 5; //Padrão do sistema.

var parcelas = [3, 5];
var acrescimos = [0.1, 0.2];
var valorFinal;

for (var index = 0; index < parcelas.length; index++) {
  var acrescimo = acrescimos[index] * valorProduto;
  valorFinal = acrescimo + valorProduto;
  var valorParcela = valorFinal / parcelas[index];
  console.log("O Valor total \n        parcelando em ".concat(parcelas[index], " vezes \xE9 ").concat(valorFinal, " e o valor da parcela \xE9 ").concat(valorParcela));
} //console.log('Valor do Produto com acrescimo ' + valorFinal );