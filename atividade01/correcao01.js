


//ex01
let numeros = [1,10,30,100,1000];

let total = 0 ;

for (let index =0; index < numeros.length; index++){
total += numeros[index];
}

let resultado = total/numeros.length


console.log(`A media entre os numeros é: ${Math.round(resultado)}`);

