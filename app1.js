/*Crea un programa que utilice console.log para mostrar un mensaje de bienvenida */

alert("BIENVENIDO");
console.log("BIENVENIDO");

/*Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.*/

let nombre=prompt("DIGITA TU NOMBRE: ");
console.log("Hola " + nombre + "!");

/*Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/
alert("Hola " + nombre + "!");

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.*/

let lang=prompt("Cuál es el lenguaje de programación que más te gusta? ");
console.log("Te gusta el lenguaje: " + lang);
alert("Te gusta el lenguaje: " + lang);

/*Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena 
el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/
alert(" ESTE ES UN PROGRAMA QUE SUMA DOS NÚMEROS ");
let num1=parseInt(prompt("Digita el primer número: "));
console.log("Primer número: " + num1);
let num2=parseInt(prompt("Digita el segundo número: "));
console.log("Segundo número: " + num2);
let resul=num1+num2;
console.log("El resultado es: " + resul);
alert("El resultado de la suma de " +num1 + " y " +num2 + " es: " +resul );

/*Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores 
y almacena el resultado en una tercera variable llamada "resultado". Utiliza 
console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/
alert(" ESTE ES UN PROGRAMA QUE RESTA DOS NÚMEROS ");
let num3=parseInt(prompt("Digita el primer número: "));
console.log("Primer número: " + num3);
let num4=parseInt(prompt("Digita el segundo número: "));
console.log("Segundo número: " + num4);
let resta=num3-num4;
console.log("El resultado es: " + resta);
alert("El resultado de la resta de " +num3 + " y " +num4 + " es: " +resta );

/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.*/
let edad=prompt("Digita tu edad: ");
if (edad>18){
    alert("BIENVENIDO A ESTE ANTRO DE MALA MUERTE");
    console.log("BIENVENIDO A ESTE ANTRO DE MALA MUERTE");
}else{
    alert("TE FALTA PELO PA MOÑO");
    console.log("TE FALTA PELO PA MOÑO");
}



