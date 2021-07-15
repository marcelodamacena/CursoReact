//ex06

let numerosMaiores = [];
let IgualMaior = 0;
let index = 0;
let aleatorio = [];
let numero = 0;

numero=prompt("Digite um numero inteiro entre 0 e 100");
if(numero < 0 || numero > 100) {
    window.alert("Numero incorreto");
} else {
    while(index < 10){
        aleatorio[index] = generateRandomInteger(100);
        index++;
    }
}
aleatorio.forEach((item) => {
    if(item == numero || item > numero){
        IgualMaior++;
        numerosMaiores.push(item);
    }
})
console.log(`Número Inserido: ${numero}\nTotal de números randômicos: ${IgualMaior}\nNúmeros igual ou maior: ${numerosMaiores}`);
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
