/* Hoja externa de script */


/*Caracter . A través de él podemos acceder a una de sus propiedades y/o métodos, recorrer otro objeto

Todo responde a la relación jerarquica de objeto. Cómo "window" es el padre de toda esta jerarquía , no es necesario especificarlo
window.alert('Mi primera aplicación'); == alert('Mi primera aplicación');

//Esto es una intruncción : ordenes individuales

_____________________
SALIDA DE DATOS
_____________________

//método 1*/
//alert('Mi primera aplicación'); // esto es un método del objeto window
//alert(window.innerWidth); // esto es una propiedad del objeto window

//método 2
//console.log("lilililililililil"); // esto es otro método para visualizar datos

//método 3
//console.error("algo va mal");

//método 4
//document.write("<p>lalalalalalalalalal </p>"); //Método para escribir en el DOM


/*_____________________
INTRODUCCIÓN DE DATOS
_____________________
Método introducción de datos. */

/*
Método confirm
Hace que aparezca un alert con la opción "aceptar" o "cancelar". Retorna el valor true para "aceptar" y false para "cancelar"

//Método 1- valores de retorno: aceptar / cancelar
const respuesta = confirm("deseas continuar?");
alert(respuesta);
*/

/*Método 2- valores de retorno: campo abierto / aceptar / cancelar
const nombre = prompt("¿Cómo te llamas?");
alert(nombre);*/
//si en este método seleccioneas a la opción "cancelar", el valor de retorno es null


/*_____________________
VARIABLES
_______________________*/

//var miValor;
//let mivalor; //No permite redeclaración
/*
const miOtroValor; //Además de no permitir redeclaración, tampoco permite que  no tenga asignada un valor. Debe ser decalara y asignada */
/*
const mivalor1 = "Texto"; //string
const mivalor2 = 2342; // tanto int como decimales se procesan igual, como datos operables
const mivalor3 = 1.8; //
const mivalor4 = true; // boolean

alert(typeof(mivalor1)); //Método para saber el tipo de variable

//declaración conjunta 
const mivalor1 = "Texto", mivalor2 = 2342,mivalor3 = 1.8, mivalor4 = true;
*/

/*_____________________
EJERCICIO-1
_______________________*/
/*
// Preguntar al usuario que edad tiene y devolver 
const nombre = prompt("¿Cómo te llamas?");
const edad = prompt("¿Qué edad tienes?");
//alert(edad);

const diasVividos = edad * 365;
//alert(diasVividos);


document.write("Has vivido un total de"+ diasVividos); // método multiargumento
*/

//document.write( "<p>",nombre," ","Has vivido un total de", diasVividos, "días.</p>"); 
/*
document.write( "<p>" + nombre + ", has vivido un total de" + diasVividos + " días.</p>"); // se concatena  a través de +

 */

 /*_____________________
EJERCICIO-2
_______________________*/
/*
//1- Preguntar al usuario cuál es su depósito 
const deposito = prompt("Te regalamos 50€ por tu primer depósito ¿Qué cantidad vas a depositar?");
//alert(deposito);

//2-Calcular el depósito total
const depositoTotal = Number(deposito) + 50;
//console.log(depositoTotal);

//3-Comunicar resultado
document.write('<p>Tu depópsito total es ' + depositoTotal + '</p>' );
*/

/*
//el método prompt siempre retorna un string por eso el resultado no es correcto. Hay que proceder a hacer una conversión de tipo.

Alerta "árbol no equilibrado" puede ser resultado

Funciones de conversión de tope:

number(); () NO es un método, es una función. Además permite obtener el valor númerico equivalente de cualquier tipo de dato, a diferencia que parseInt que se utiliza solo para string a number

parsetInt(); Ignora los decimales

parseFlow(); Respeta los decimales

Todo esto es muy útil para la valiación de formularios
Cuando la introducción de datos no es congruente el valor de retorno es nAn

¿Cómo informarnos de que algo es operable?
Informa de su un dato es inoperable

si es inoperable el valor de retorno es true
inNaN();
*/


/*
//Valor false
const valor1 = isNaN(12);
alert(valor1);

//Valor false
const valor2 = isNaN(3.14);
alert(valor2);

//Valor true
const valor3 = isNaN('batman');
alert(valor3);

//Valor false . Cuidado aquí 33 es un string, pero sigue siendo operable. El resultado quizás no sea el esperado
const valor4 = isNaN('33');
alert(valor4);

//Valor true. No puede procesar el espacio
const valor5 = isNaN('3 3');
alert(valor5);
*/

/*==========================
ESTRUCTURAS DE CONTROL
============================*/

/*
if (7 < 2){ // if (false)....

    alert('es verdadera');

}else{

    alert('es falso');

}*/ 

/*
if (7 == 2){ // if (false)....

    alert('es verdadera');

}else{

    alert('es falso'); //

}*/
/*
if (7 <= 7){ // if (false)....
    
        alert('es verdadera');
    
    }else{
    
        alert('es falso'); //
    
    }

if (7 != "hola"){ // if (false)....
        
     alert('es verdadera');
        
    }else{
        
    alert('es falso'); //
        
 }

// Diferencia entre equivalente o estrictamente equivalente. Intentar utilizar los === porque es mucho mas exacto y disciplinado reduciendo el margen de error

 if (5 == "5"){ // if (false)....
    
 alert('es verdadera');
    
}else{
    
alert('es falso'); //
    
}

if (5 === "5"){ // if (false)....
    
 alert('es verdadera');
    
}else{
    
alert('es falso'); //
    
}

if (5 < 8 && 4 > 2){ // El resultado es true
    
 alert('es verdadera');
    
}else{
    
alert('es falso'); //
    
}
*/


/*________________
EJERCICIO
__________________
preguntar tu edad
detectar de si el menor de edad para expulsarle
si no lo es, dar la bienvenida
*/

/*
//PASO 1
const edad = prompt("¿Qué edad tienes?");


if (edad < 18 ){ 
    
    alert('Lo sentimos, no puedes acceder aquí hasta que tengas 18 años');
    
}else{
    
    alert('¡Bienvenido!'); 
    
}*/

/*Lo primero que hay que hacer es comprobar que no hay ningún valor incroguente, ningún null Fricción cognitiva*/

//PASO 2. Comprobar que usuario no ejecute ESC
/*
const edad = prompt("¿Qué edad tienes?");

if (edad === null) {
    document.write("<p>No se recibió la información. Reinicie la aplicación</p>");
} else {

        if (edad < 18 ){ 
            
            alert('Lo sentimos, no puedes acceder aquí hasta que tengas 18 años');
            
        }else{
            
            alert('¡Bienvenido!'); 
            
        } 
}// las estructuras de control son anidables*/

//PASO 3. Comprobar que el usuario no deja el campo vacío o introduce un valor que no es numérico
/*
const edad = prompt("¿Qué edad tienes?");

if (edad === null) {// este es el primer bloque de seguridad

    document.write("<p>No se recibió la información. Reinicie la aplicación</p>");

} else {

        if(edad ==="" || edad ===" " || isNaN(edad)===true){

            document.write('<p>Es necesario un valor real de tu edad</p>');

        }else{

            if (edad < 18 ){ 
                
                alert('Lo sentimos, no puedes acceder aquí hasta que tengas 18 años');
                
            }else{
                
                alert('¡Bienvenido!'); 
                
            } 
        }

}
*/

/*
//PASO 4. Imagina que el usuario introduce su edad con un string

const edad = prompt("¿Qué edad tienes?");

if (edad === null) {// este es el primer bloque de seguridad

    document.write("<p>No se recibió la información. Reinicie la aplicación</p>");

} else {

        if(edad ===""){

            document.write('<p>Es necesario que rellenes el campo</p>');

        }else{

            if(isNaN(edad) === true ){

                document.write('<p>Escribe tu edad en número, por favor</p>');

            } else {

                if (edad < 18 ){ 
                    
                    alert('Lo sentimos, no puedes acceder aquí hasta que tengas 18 años');
                    
                }else{
                    
                    alert('¡Bienvenido!'); 
                    
                } 

            }

        }

}
*/

/*
//PASO 5. Las estructuras de control son resueltas y el script es liberado

const edad = prompt("¿Qué edad tienes?");

if (edad === null) {// este es el primer bloque de seguridad

    document.write("<p>No se recibió la información. Reinicie la aplicación</p>");

} else {

        if(edad ===""){

            document.write('<p>Es necesario que rellenes el campo</p>');

        }else{

            if(isNaN(edad) === true ){

                document.write('<p>Escribe tu edad en número, por favor</p>');

            } else {

                if (edad < 18 ){ 
                    
                    alert('Lo sentimos, no puedes acceder aquí hasta que tengas 18 años');
                    
                }else{
                    
                    alert('¡Bienvenido!'); 
                    
                } 

            }

        }

}

document.write('<p><strong>¡Gracias por tu atención!</strong></p>');

*/



//PASO 7. Optimización. isNaN(edad) === true , no es necesario. Ver notas
/*
const edad = prompt("¿Qué edad tienes?");

if (edad === null) {// este es el primer bloque de seguridad

    document.write("<p>No se recibió la información. Reinicie la aplicación</p>");

} else {

        if(edad ===""){

            document.write('<p>Es necesario que rellenes el campo</p>');

        }else{

            if(isNaN(edad)){

                document.write('<p>Escribe tu edad en número, por favor</p>');

            } else {

                if (edad < 18 ){ 
                    
                    alert('Lo sentimos, no puedes acceder aquí hasta que tengas 18 años');
                    
                }else{
                    
                    alert('¡Bienvenido!'); 
                    
                } 

            }

        }

}

document.write('<p><strong>¡Gracias por tu atención!</strong></p>');

*/

/* Ejercicio 4. clase 3*/
/* 
De 0 a 500€ - sin descuento
de 501 a 1000€ --- 10%
1001 a 2000€ ---15% 
2000€ a ---- 20%

Averiguar cuanto se ha gastado el usurio y devolver la cantidad descontadaa
"Para un gasto de XXX le corresponde un descuento de XX€ (total XX€)"
1. cuanto se ha gastado


*/


/*
const gasto = prompt("¿Cuánto te has gasto?");
console.log(gasto);
//Paso 1

if ( gasto < 500 ){
    document.write('Lo sentimos pero no le corresponde ningún descuento, siga comprando');
}
//( 501 < gasto < 1000 ) incorrecto

if ( gasto > 500 && gasto <= 1000){

    const descuento = gasto * 10/100;

    const total= gasto - descuento;

    document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");

}


if ( gasto > 1001 && gasto <= 2000 ){

    const descuento = gasto * 20/100;
    
    const total= gasto - descuento;
    
    document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");

}

if ( gasto > 2000 ){
    
        const descuento = gasto * 30/100;
        
        const total= gasto - descuento;
        
        document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");
    
    }
*/

/*
//paso 2. Utilización de else if . el script solo pasa a la siguiente condición hasta que haya conmprabado la anterior


if ( gasto < 500 ){
    document.write('Lo sentimos pero no le corresponde ningún descuento, siga comprando');

} else if(gasto <= 1000){

    const descuento = gasto * 10/100;

    const total= gasto - descuento;

    document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");

} else if(gasto <= 2000){

    const descuento = gasto * 20/100;
    
    const total= gasto - descuento;
    
    document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");

} else{

        const descuento = gasto * 30/100;
        
        const total= gasto - descuento;
        
        document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");

}

*/

/*
//paso 3. Optimización de código. Hay demasiado código repetido

const gasto = prompt("¿Cuánto te has gasto?");

// Hacer global la variable descuento y utilizar let y saca fuera de la estructura de control las directiva document.write() y la variable total, ya que se repitía en cada else


let descuento;

if ( gasto < 500 ){

    document.write('Lo sentimos pero no le corresponde ningún descuento, siga comprando');

} else if(gasto <= 1000){

    descuento = gasto * 10/100;

} else if(gasto <= 2000){

    descuento = gasto * 20/100;
    
} else{

    descuento = gasto * 30/100;

}//

// Si descuento existe , (por ejemplo No se las situación gasto de menos de 500€ , primer bloque), entoces libera ese script

if(descuento){

    const total= gasto - descuento;

    document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");

}
*/
/*
//Condicional ternario. Es muy bueno para optimizar, no mantenible 

const respuesta = prompt("¿Cuántos argumentos acepta el método prompt?");
(respuesta == 2) ? aler("¡Correcto!") :alert("¡Merluzo!");
// el signo ?, indica que es una condicional
*/


//Condicional de tipo switch.
//Ejercico

const estacion = prompt ("Dame una estación");

switch (estacion) {

    case 'PRIMAVERA':// todo es casesensitive
    case 'Primavera':
    case 'primavera':
        alert('¡Sale la flor!');
        break;
    
    case 'Verano':
        alert('¡Hace calor!');
        break;   

     case 'Invierno':
        alert('¡Hace frí0!');
        break;

    case 'Otoño':
        alert('¡Cae la hoja!');
        break;    

    default:
        alert('¡UY! Estación no registrada');
        break;  
}
