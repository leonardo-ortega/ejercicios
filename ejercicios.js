// // 1: Imprimir los numeros del 1 al 100.
// let numbers=100;
// for(let x = 1; x <=100;x++){
//     console.log(x);
// }
// ____________________________________________
// 2: Imprimir los numeros pares del 1 al 100
// let numbers = 100;
// for(x = 1; x<= 100; x++){
//     if(x % 2== 0){
//         console.log(x)
//     }
// }
// _______________________________________________
// 3: Imprimir los numeros impares del 1 al 100
// let numbers = 100;
// for(x = 0; x <= 100; x++){
//     if(x % 2 == 1){
//         console.log(x)
//     }
// }
// _______________________________________________________
// 4: Dado un array con valores numericos [1,3,5,2,4,12,21]
// imprimir los valores pares a impares por separado
// let arrayNumb = [1,3,5,2,4,12,21];
// let pares = [];
// let impares = [];
// for(x=0; x < arrayNumb.length; x++){
//     if(arrayNumb[x] % 2 == 0){
//         pares.push(arrayNumb[x])
        
        
//     }
//     else{
//         impares.push(arrayNumb[x]);
//     }
// } 
// console.log(pares)
// console.log(impares)
// ____________________________________________________________
// 5: Dado un array con valores numericos [1,3,5,2,4,12,21]
// // imprimirlo al reves
// let arrayNumbers= [1,3,5,2,4,12,21];
//     arrayNumbers.reverse();
// ____________________________________________________________
// 6: Contar e imprimir cuantos numeros pares hay dentro de un array
// let numbers= [1,2,3,4,5,6,7,8,9,10];
// let pares = 0;
//     for(x = 0; x <=numbers.length; x++){
//         if(x % 2 == 0){
//             pares++
//         }
//     }
// console.log("La cantidad de numeros pares es "+ pares);
// ____________________________________________________________
// 7: Ejercicio triangulo de "#"

// let numerales = ""
//     for(x =0; x<= 7; x++){
//         numerales = numerales + "#";
//         console.log(numerales);
//     }
// 8: Ejercicio tablero de "#"
// let filas= 8; 
// let result= "";
// for(x = 1;x <= filas; x++){
//     for(y = 1;y <= filas; y++){
//         if((y + x) % 2 === 0){
//             result += " ";
//         }
//             else{
//                 result += "#";
//         }
//     }
//     result += '\n';
// }
// console.log(result)
// ____________________________________________________________
// 9: Escribe un programa que use console.log para imprimir todos los números de
// 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz"
// en lugar del número, y para los números divisibles por 5 (y no 3), imprime
// "Buzz" en su lugar.
// Cuando tengas eso funcionando, modifica tu programa para imprimir "
// FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
// o "Buzz" para números divisibles por solo uno de ellos).

// for(let x =1; x <=100; x++){
//     if (x % 3 === 0 && x % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (x % 5 === 0) {
//       console.log('Buzz');
//     } else if (x % 3 === 0) {
//       console.log('Fizz');
//     } else {
//       console.log(x);
//     }
// }
// _____________________________________________________________________________________
// 10: Dado un Array de nombres , devolver los que empiezan con una letra minúscula ->
//  ["Lucas", "pedro", "oscar", "Jorge"]
// let nombres = ["Lucas", "pedro", "Juan", "jose"];
// let may = [];
// let min = [];
// for(let x = 0; x<nombres.length; x++){
    
// if (nombres[x][0] == nombres [x][0].toLowerCase()){
//     min.push(nombres[x]);
//     }else may.push(nombres[x])
// }
// console.log(may);
// console.log(min);
// ___________________________________________________________________________________
// 11: Mostrar el primer valor par de un array de números, usando la función “find”
//  [1, 3, 5, 6, 9, 8];

// let numbers = [1,3,4,5,6,9,8]; 
// let primerValorPar = numbers.find(x => x % 2==0);
// console.log(primerValorPar);
// ______________________________________________________________________________________
// 12: Mostrar el último valor par de un array de números [1, 3, 4, 5, 6, 9, 8}
// let numbers = [1,3,4,5,6,9,8]; 
// let result = [];
// let primerValorPar = numbers.find(x => x % 2 == 0);
// result = numbers.reverse();
// let ultimoValorPar = result.find(x => x % 2 == 0);
// console.log(primerValorPar);
// console.log(ultimoValorPar);
// _________________________________________________________________________________________
// 12: Dado el siguiente array de objetos, mostrar el nombre y apellido de cada contacto con el formato “Nombre Apellido”
// let mayores = [];
// let personas = [{
//     "firstName": "Jorge",
//     "lastName": "Lopez",
//     "age": 28
// },
// {
//     "firstName": "Lucas",
//     "lastName": "Rodriguez",
//     "age": 32
// },
// {
//     "firstName": "Roberto",
//     "lastName": "Gallati",
//     "age": 45
// },
// {
//     "firstName": "Fernando",
//     "lastName": "Martinez",
//     "age": 12
// }];
// for(let x=0; x < personas.length; x++){
//     console.log("Nombre:" + personas[x].firstName);
    
//     console.log("Apellido:" + personas[x].lastName);
// }
// ________________________________________________________________________________________________
// 13: Mostrar solo los mayores de 30

// let personas = [{
//     "firstName": "Jorge",
//     "lastName": "Lopez",
//     "age": 28
// },
// {
//     "firstName": "Lucas",
//     "lastName": "Rodriguez",
//     "age": 32
// },
// {
//     "firstName": "Roberto",
//     "lastName": "Gallati",
//     "age": 45
// },
// {
//     "firstName": "Fernando",
//     "lastName": "Martinez",
//     "age": 12
// }];
// function filter (personas){
//    let resultPersonas = [];
//    for (let x=0; x< personas.length; x++){
//          if(personas[x].age > 30 ){
//           resultPersonas.push(personas[x]);
//       }
//    }
//    return resultPersonas;
// }

// console.log(filter(personas));
// _______________________________________________________________________________________________
// 14: Ordenar la lista de contactos de menor a mayor (edad)

// let personas = [{
//     "firstName": "Jorge",
//     "lastName": "Lopez",
//     "age": 28
// },
// {
//     "firstName": "Lucas",
//     "lastName": "Rodriguez",
//     "age": 32
// },
// {
//     "firstName": "Roberto",
//     "lastName": "Gallati",
//     "age": 45
// },
// {
//     "firstName": "Fernando",
//     "lastName": "Martinez",
//     "age": 12
// },
// ];

// personas.sort((a, b) =>{
//     if (a.age > b.age){
//         return 1;
//     }
//        if (a.age < b.age){
//         return -1;
//     }
//     return 0;
    
    
// });
// console.log(personas)
// __________________________________________________________________________________
// 13: Agregar un campo nuevo con el nombre “age” a cada objeto,
// con la edad de cada contacto, calculando la edad usando la fecha de nacimiento
// [{
//     "firstName": "Jorge",
//     "lastName": "Lopez",
//     "dateOfBirth": "12/01/1990"
// },
// {
//     "firstName": "Lucas",
//     "lastName": "Rodriguez",
//     "dateOfBirth": "05/04/1980"
// },
// {
//     "firstName": "Roberto",
//     "lastName": "Gallati",
//     "dateOfBirth": "30/10/1994"
// },
// {
//     "firstName": "Fernando",
//     "lastName": "Martinez",
//     "dateOfBirth": "20/12/1999"
// }]
// 14:
    

