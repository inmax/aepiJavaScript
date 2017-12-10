*==========================
CLASE 2
*==========================
________________
Ejercicio 2
________________

sobre el primer depósito regalan 50€
cuaánto es el primer depósito
informar "tu primer depósito se convertirá en blablablab"

No confundir los métodos con las funciones
funciones definidas que estan en core


________________
OPERADORES
________________
Hay 6 tipos:

1.ARITMÉTICOS: Operaciones matemáticas
+   -   *   /   %(para el resto de una división. Suele utilizarse para localizar múltiplos)

2.ARITMÉTICOS COMBINADOS: acumular el valor del operando derecho sobre el izquierdo. Ej: 4 += 2 tendría un resultado de 6
+=  -=  *   /=  

3. COMPARACIÓN / RELACIONALES: conforamn expresiones comparativas que resultan en boolean
>   >=  ==  ===   <=  <   !=    !==
=== "estrictamente igual que " no solo compara el valor sino también el tipo de variable.

4.OPERADORES LÓGICOS: conforman expresiones comparativas entre boleanos que resultan en boleanos
&&  ||  !

5. INCREMENTAL / DECREMENTAL: incrementan o reducen en una unidad un valor
++  --

6.CONCATENACIÓN
+

7.ASIGNACIÓN
=

___________________________
ESTRUCTURAS DE CONTROL
___________________________
Controlan el flujo de ejecución
1.Condicional
2.Iterativo


    IF // contenido entre llaves: bloque o encapsulación
    if (expresion condicional){
        intruccion_1;
        intruccion_2;
        intruccion_3;
    } else{
        intruccion_1;
        intruccion_2;
        intruccion_3;
    } // Si la expresión condicional tiene un valor true se ejecuta el primer bloque , si no, el segundo
Solo un "else"


------> IMPORTANTE
se accede al bloque si el valor NO retorna estos valores
false   Nun     0   ""  undefined

const continuar = confirm('Deseas continuar');


//continuar === true . Esta condición no es necesario especificarla porque cualquier valor distinto de los mencionados antes va a ser true

if (continuar) {

    alert("Epaaaa!");
}

paso 2 

const continuar = confirm('Deseas continuar');

if (continuar) {

    alert("Epaaaa!");

}else {

    alert('nanai');

}




___________________________
RANGOS DE OPERADORES
___________________________
revisar pdf
const miValor = 2 + 2 * 4 ; // el resultado sería 8


Hacer lote 1.  practica 0. 7/ 9 horas
Resolver el código dentro de cada html, en una tag embebida