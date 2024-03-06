//Ejercicios

let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]

let suma1 = 0;
let suma2 = 0;

// 1
//Suma de los numeros dentro de los arrays
for (let i = 0; i < arrayNumeros1.length; i++){
   suma1 += arrayNumeros1[i]
}
console.log(suma1);
for (let i = 0; i < arrayNumeros2.length; i++){ 
    suma2 += arrayNumeros2[i]
 }
 console.log(suma2);

 //Suma de los 2 arrays
 let resultado = suma1 + suma2
 console.log(resultado);
 
//  Promedio de los arrays

   let solucion = 0

   solucion = solucion/arrayNumeros1.length + arrayNumeros2.length
   console.log(solucion);

// maximo y minimo

let max = 0
let min = 0

for (let i = 0; i < arrayNumeros1.length; i++) {

   if (max < arrayNumeros1.length){
      max = arrayNumeros1.length
   }
}
console.log(max);

for (let i = 0; i < arrayNumeros2.length; i++) {
   if (min > arrayNumeros2.length) {
      min = arrayNumeros2[i]
   }
}
console.log(min);

// Sumar los pares y restar los impares

let sumaPares = 0
let sumaImpares = 0

for (let i = 0; i < resultado.length; i--){
   if (i%2) {
      
   }
}



