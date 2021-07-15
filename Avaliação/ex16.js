//ex16
let array = [];
let numQuadrado= [];
let resultado = 0;

for(let index = 0; index <= 20; index++) {
    array.push(index);
    numQuadrado.push(index ** 2);
    resultado = array[index] + "² = " + numQuadrado[index];
    console.log(resultado);
}
