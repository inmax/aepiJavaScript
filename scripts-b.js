/* Ejercicio clase 3*/
/* 
De 0 a 500€ - sin descuento
de 501 a 1000€ --- 10%
1001 a 2000€ ---15% 
2000€ a ---- 20%

Averiguar cuanto se ha gastado el usurio y devolver la cantidad descontadaa
"Para un gasto de XXX le corresponde un descuento de XX€ (total XX€)"
1. cuanto se ha gastado


*/

const gasto = prompt("¿Cuánto te has gasto?");
console.log(gasto);

if ( gasto < 500 ){
    document.write('Lo sentimos pero no le corresponde ningún descuento, siga comprando');
}

if ( 501 < gasto < 1000 ){
    document.write("Para un gasto de XXX le corresponde un descuento de XX€ (total XX€)");
}