//13

let inteiros = [];
let x = 40;

for(let index = 2; index <= x; index++) {
    if(index % 2 == 0) {
        inteiros.push(index);
    }
}
console.log(`Numeros inteiros pares de 0 a ${x} são: ${inteiros}`);