


//ex04
//Usuario
let valorProduto = 33;
let numeroParcela = 5; 

//Padrão do sistema.
let parcelas = [3,5]
let acrescimos = [0.1,0.2]

let valorFinal;

for (let index = 1; index < parcelas.length; index++) { 
    // 3 = 3?
 if  ( numeroParcela == parcelas[index]){ // encontramos o valor index correspondente a parcela
    let acrescimo = acrescimos[index] * valorProduto
    valorFinal = acrescimo + valorProduto;
    break;
 }else{
     console.log('parcela direfente da selecionada ')
 }
}

console.log('Valor do Produto com acrescimo ' + valorFinal);