/* Hoja externa de script */


/*Caracter . A través de él podemos acceder a una de sus propiedades y/o métodos, recorrer otro objeto

Todo responde a la relación jerarquica de objeto. Cómo "window" es el padre de toda esta jerarquía , no es necesario especificarlo
window.alert('Mi primera aplicación'); == alert('Mi primera aplicación');

//Esto es una intruncción : ordenes individuales
//método 1
alert('Mi primera aplicación'); // esto es un método del objeto window
//método 1
alert(window.innerWidth); // esto es una propiedad

console.log("lilililililililil"); // esto es otro método para visualizar datos
console.error("algo va mal");
document.write("<p>lalalalalalalalalal </p>"); //Método para escribir en el DOM
*/

//Método introducción de datos. Hace que aparezca un alert con la opción "aceptar" o "cancelar". Retorna el valor true para "aceptar" y false para "cancelar"
/*
const respuesta = confirm("deseas continuar?");
alert(respuesta);*/

//si en este método seleccioneas a la opción "cancelar", el valor de retorno es null
/*
const nombre = prompt("¿Cómo te llamas?");
alert(nombre);*/