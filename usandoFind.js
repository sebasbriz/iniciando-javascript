//Hacer una funcion con tu nombre y apellido
const nombreApellido = ["Sebastian ", "Brizuela"];
const nombre = nombreApellido.find((nombre) => nombre === "Sebastian ");
const apellido = nombreApellido.find((apellido) => apellido === "Brizuela");
console.log(nombre + apellido);
//Sumar dos numeros
const nros = [10, 25];
const nro1 = nros.find((nro1) => nro1 === 10);
const nro2 = nros.find((nro2) => nro2 === 25);
console.log(nro1 + nro2);

/*
Ejercicio 3.2

1- Crear un array vacío para usar en una lista de compras.
2- Agregar leche, pan, manzanas a tu lista.
3- Actualizar pan con bananas y huevos.
4- Remover el último elemento del array y mostrar en consola.
5- Ordenar la lista alfabéticamente
6- Encuentra y muestra la salida del index del valor "leche".
7- Después de bananas, agrega zanahorias y lechuga.
8- Crea una nueva lista conteniendo jugo y pop.
9- Combina ambas listas, agrega la nueva lista dos veces al final de la primera lista.
10- Obtener el último valor de index de pop y muestra en consola.
11- Imprime el array resultante en consola.
*/
console.log(`Ejercicio 3.2`)
const listaSuper = [];
console.log(listaSuper);
listaSuper.push(`leche`, `pan`, `manzanas`);
listaSuper.splice(1, 1, `bananas`, `huevos`);
listaSuper.pop();
console.log(listaSuper);
listaSuper.sort();
const indexLeche = listaSuper.indexOf(`leche`);
console.log(`Posicion de leche `, indexLeche);
console.log(listaSuper);
listaSuper.splice(1, 0, `zanahorias`, `lechuga`);
const lista2 = [`jugo`, `pop`];
const lista1Y2 = listaSuper.concat(lista2);
const lista1_2 = lista1Y2.concat(lista2);
const indexPop =lista1_2.lastIndexOf(`pop`);
console.log(`El ultimo valor del index de pop`, indexPop);
console.log(lista1_2);

