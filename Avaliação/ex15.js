//ex15
let totalPares = 0;
let totalImpares = 0;

for(let i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        //console.log(i);
        totalPares += i;
    } else {
        //console.log(i);
        totalImpares += i;
    }
}
console.log(`O total dos numeros pares é: ${totalPares}`);
console.log(`O total dos numeros impares é: ${totalImpares}`);
