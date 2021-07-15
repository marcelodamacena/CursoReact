//ex09

let aleatorio = [];
let menor = 101;
let maior = 0;

for (let index = 0; index < 10; index++) {
    aleatorio[index] = generateRandomInteger(100);
}
const number = (aleatorio) => {
    for (let x = 0; x < aleatorio.length; x++) {
        if (aleatorio[x] > maior) {
            maior = aleatorio[x];
        }
        if (aleatorio[x] < menor) {
            menor = aleatorio[x];
        }
    }
    console.log(maior);
    console.log(menor);
}
console.log(aleatorio);
console.log(number(aleatorio));

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}