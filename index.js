// Ejercicio 1

function esPar(num){
    num = prompt("Ingrese un numero para saber si es par o impar: ")

    if (num % 2 == 0){
        alert("Es par")
    } else{
        alert("Es impar")
    }
}

// Ejercicio 2

function esMayor(num1, num2){
    num1 = prompt("Ingrese el primer numero: ")
    num2 = prompt("Ingrese el segundo numero: ")

    if (num1 > num2){
        alert(`${num1} es mayor a ${num2}`)
    }else if(num2 > num1){
        alert(`${num2} es mayor a ${num1}`)
    } else if(num1 == null || num2 == null){
        alert(`Numeros nulos.`)
    }
}


//Ejercicio 3

function multiploCinco(num){
    num = prompt("Ingrese un numero: ")
    if(num % 5 == 0){
        alert(`${num} es multiplo de 5`)
    } else{
        alert(`${num} no es multiplo de 5`)
    }
}


//Ejercicio 4

function imprimir(num){
    num = prompt("Ingrese un numero:")

    for (let i = 0; i != num; i++){
        console.log(i)      
    }
    i = num
    console.log(i)
}
//imprimir()

//Ejercicio 5

function repetirPalabra(palabra, num){
    palabra = prompt("Escriba una palabra:")
    num = prompt("¿Cuantas veces quieres que se repita la palabra?:")

    for (let i = 0; i != num; i++){
        console.log(palabra)      
    }
}

//repetirPalabra()

//Ejercicio 6

function imprimirValoresArray(arr) {
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
}

//Ejercicio 7

function imprimirValores(arr) {
    for (let i = 0; i < arr.length; i++) {
    if (i !== 4) {
        console.log(arr[i]);
        }
    }
}

//Ejercicio 8

function arrayMultiplicado(arr, numero) {
    for (let i = 0; i < arr.length; i++) {
      const resultado = arr[i] * numero;
    console.log(resultado);
    }
}