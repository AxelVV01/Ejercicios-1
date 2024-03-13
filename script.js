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
let restaImpares = 0

for (let i = 0; i < arrayNumeros1.length; i++){
   if (arrayNumeros1[i] % 2 == 0) {
      sumaPares += arrayNumeros1[i]
   }
}
console.log(sumaPares)


//pendiente de acabar
for (let i = 0; i < arrayNumeros1.length; i++) {
   if(restaImpares = arrayNumeros1[i]){
   }
   
}

console.log(restaImpares)


// parte 2

let arrayNombres1 = ["Federico", "KayÃ³n", "LuÃ­s", "MÃ³nica", "NicolÃ¡s", "Ricardo", "Sara", "Stephanie", "Yahved"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

let posicion = 0
let textoMasLargo = 0
let textoMasLargo2 = 0

//Array 1 apartir de un bucle for indicamos que el array en mas grande o igual que texto mas largo y recorremos con i++ uno por uno hasta obtener el resultado mas grande y lo asinganos al textoMaslargo y obtenesmos la posicion en el array para saber el nombre.  
for (let i = 0; i < arrayNombres1.length; i++) {
   if(arrayNombres1[i].length >= textoMasLargo){
   textoMasLargo = arrayNombres1.length
   posicion = i
}
}
console.log(`${arrayNombres1[posicion]}`)
console.log(textoMasLargo)


//Array 2 textMasLargo2

for (let i = 0; i < arrayNombres2.length; i++) {
   if(arrayNombres2[i].length >= textoMasLargo2){
   textoMasLargo2 = arrayNombres2.length
   posicion = i
}
}
console.log(`${arrayNombres2[posicion]}`)
console.log(textoMasLargo2)

//Array 1 texTMascorto1

let posicion1
let textoMasCorto = arrayNombres1[0]


for (let i = 0; i < arrayNombres1.length; i++) {;
   console.log(arrayNombres1)
   if (arrayNombres1[i].length <= textoMasCorto){
      textoMasCorto = arrayNombres1.length
      posicion1 = i
   }
   
}
console.log(`${arrayNombres1[posicion1]}`);
console.log(textoMasCorto)