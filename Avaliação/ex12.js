//ex12
let total = 0;
let pares = [];

for(let index = 2; index <= 500; index++) {
    if(index % 2 == 0) {
        total++;
        pares.push(index);
    }
}
console.log(`Quantidade de numeros pares:${total}`);
console.log(`Os numeros pares: ${pares}`);
