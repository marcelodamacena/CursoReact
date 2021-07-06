


//ex04
//Usuario
let valorProduto = 33;
let numeroParcela = 5; 

//Padrão do sistema.
let parcelas = [3,5]
let acrescimos = [0.1,0.2]

let valorFinal;

for (let index = 0; index < parcelas.length; index++) { 
    
    let acrescimo = acrescimos[index] * valorProduto
    valorFinal = acrescimo + valorProduto;
    
    let valorParcela = valorFinal / parcelas[index]

    console.log(
        `O Valor total 
        parcelando em ${parcelas[index]} vezes é ${valorFinal} e o valor da parcela é ${valorParcela}`
        );
    
 
}
//console.log('Valor do Produto com acrescimo ' + valorFinal );