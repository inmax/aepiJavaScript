
/*________________
EJERCICIO 3
__________________

 clase 3. Calcula el descuento que le pertenece a cada usuario según la cantidad gastada


De 0 a 500€ - sin descuento
de 501 a 1000€ --- 10%
1001 a 2000€ ---15% 
2000€ a ---- 20%

Averiguar cuanto se ha gastado el usurio , en base a eso, el descuento correspondiente, y finalmente comunicarle lo que debe de pagar

"Para un gasto de XXX le corresponde un descuento de XX€ (total XX€)"
*/


/*
//PASO 1.
//1. Cuánto se ha gastado
const gasto = prompt("¿Cuánto te has gasto?" , "Indica el total de tu factura");
console.log(gasto);


//2. ¿Qué descuento le corresponde?

if ( gasto <= 500 ){
    document.write('Lo sentimos pero no le corresponde ningún descuento, siga comprando');
}
//( 501 < gasto < 1000 ) incorrecto

if ( gasto > 500 && gasto <= 1000){

    const descuento = gasto * 10/100;

    const total= gasto - descuento;

    document.write("<p>Para un gasto de <strong>"+ gasto +"€</strong> le corresponde un descuento de "+ descuento +"€ ("+ total +"€)</p>");

}


if ( gasto > 1000 && gasto <= 2000 ){

    const descuento = gasto * 20/100;
    
    const total= gasto - descuento;
    
    document.write("<p>Para un gasto de <strong>"+ gasto +"</strong> le corresponde un descuento de "+ descuento +"€ ("+ total +"€)</p>");

}

if ( gasto > 2000 ){
    
        const descuento = gasto * 30/100;
        
        const total= gasto - descuento;
        
        document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");
    
    }
*/

/*
//PASO2. Utilización de else if . el script solo pasa a la siguiente condición hasta que haya conmprabado la anterior


const gasto = prompt("¿Cuánto te has gasto?" , "Indica el total de tu factura");
console.log(gasto);

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

}*/

/*
//PASO3. Optimización de código. Hay demasiado código repetido
*/
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

// Si descuento existe , (por ejemplo No se da la situación gasto de menos de 500€ , primer bloque), entoces libera ese script

if(descuento){

    const total= gasto - descuento;

    document.write("Para un gasto de "+ gasto +" le corresponde un descuento de "+ descuento +"€ ("+ total +"€)");

}

/*




//Condicional ternario. Es muy bueno para optimizar, no mantenible 

const respuesta = prompt("¿Cuántos argumentos acepta el método prompt?");
(respuesta == 2) ? aler("¡Correcto!") :alert("¡Merluzo!");
// el signo ?, indica que es una condicional
*/




//Condicional de tipo switch.
/*________________
EJERCICIO 5
__________________

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
*/
/*
// Estructuras de control iterativas 
//For.

// 1.Declaración de contador let i = 0
// 2.Condición de repeteción i < 3 
// 3.Factor de incremento i++

for (let i = 0; i < 3 ; i++){ //contador. i , es una variable luego la podemos seguir utilizan dentro del bloque
    
    document.write("<p>¡Estoy en una vuelta "+ i +"!</p>"); //instrucciones que invocan X veces
    
    }

*/

//Ejercicio tabla de multiplicar del 5

/*
for (let i = 1; i < 11 ; i++){ 
    
    document.write("<p> 5 x"+ i + " = "+ i*5 + "</p>"); 
    
}*/

/*
//Así NO
for (let i = 0; i < 11 ; i++){ 

    let resultado = i * 5 ;// No declarar dentro del bucle variables , se redeclarán i veces. Globalizarlas
    document.write("<p> 5 x"+ i + " = "+ resultado + "</p>"); 
    
}*/

/*

let resultado;// variable globalizada. 

for (let i = 0; i < 100 ; i++){ 

        if ( i === 0 ){

            continue;// de esta vuelta pasa
        }
    
        resultado = i * 5 ;// No declarar dentro del bucle variables , se redeclarán i veces. Globalizarlas
        document.write("<p> 5 x"+ i + " = "+ resultado + "</p>"); 

        if ( i === 10 ){

            break;

        }
        
    }

document.write('<h2>Bucle abandonado</h2>');

// la palabra "continuous" omite la vuleta donde se declara


*/
