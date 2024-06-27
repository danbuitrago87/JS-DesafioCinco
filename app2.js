/*Crea una variable "numero" y solicita un valor con prompt. 
Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.*/

let num=prompt("Digita un número: ");
    if(num>0){
        alert("El número es positivo");
    }
    else{
        if (num==0){
            alert("El número es cero");
        }else{
            alert("El número es negativo");
        }
    }

/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.*/
let numero=0;
while(numero<10){
    numero++;
    console.log(numero);
}

/*Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/
let nota=prompt("Digite su nota: ");
if(nota>=7){alert("Aprobado");}
else{alert("REPROBADO");}

/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/
let aleatorio=Math.floor(Math.random()*1000);
console.log(aleatorio);
alert("El número aleatorio es: " +aleatorio);






