//ex08
let anoBi = [];

for (let index = 1999; index < 2031; index++) {
    if (index % 4 == 00 && index % 100 != 0 || index % 400 == 0) {
        anoBi.push(index);
    }
}
console.log(`Anos bissextos entre 2000 a 2030 são os seguintes: ${anoBi}`);