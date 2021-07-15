//ex07

let codDaVinci = [];
let num = 10;
let n1 = 0;
let n2 = 1;
let next;

for (let index = 0; index < num; index++) {
  codDaVinci.push(n1);
  next = n1 + n2;
  n1 = n2;
  n2 = next;
}
console.log(codDaVinci)