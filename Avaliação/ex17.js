//ex16

let array = [];
let total = 0;
let maior = 0;
let menor = 110;

function aleatorio(num) {
    while (array.length < num) {
        let index = Math.floor(Math.random() * 100) + 1;
        if (array.indexOf(index) === -1) array.push(index);
        total = total + index;
        if (index > maior) maior = index;
        if (index < menor) menor = index;
    }
    console.log(array);
}
aleatorio(10);

console.log(`Maior é : ${maior}`);
console.log(`Menor é : ${menor}`);
console.log(`Media foi : ${total / array.length}`);
