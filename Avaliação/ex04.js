//ex04

let numImpares = [];

for(let index = 1; index <= 100; index++) {
    if(index % 2 != 0){
        numImpares.push(index);
    }
}
numImpares.forEach((num) => {
    console.log(num);
});
