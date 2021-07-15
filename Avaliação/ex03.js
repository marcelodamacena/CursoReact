//ex03

let num = 100;
let array= [];

for( let index = 300;  index >= num ; index--) {
    array.push(index);
}
array.forEach((entry) => {
    console.log(entry);
})
