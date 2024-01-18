//teorema de pitagoras
let A = prompt("Ingrese el valor del cateto a");
let B = prompt("Ingrese el valor del cateto b");
let expA = A ** 2;
let expB = B ** 2;
let suma = expA + expB;
let hipo = Math.sqrt(suma)
console.log(`Hipotenusa = ${hipo}`);
document.write(`Hipotenusa = ${hipo}`)
