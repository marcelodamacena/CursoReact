//ex02

let numeros = [];

for(let index = 1; index <= 50; index++){
    if(index % 2 == 0){
        numeros.push(index);
    }
}
console.log(numeros.join(` - `));
