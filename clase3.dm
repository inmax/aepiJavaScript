*==========================
CLASE 3
*==========================

-Alcance de las variables. Va a determinar la validez de la misma. Solo existe en el bloque donde está declarada.

-Cuidado con las redeclaraciones
"globalizar" variables, sacarlas del bloque

-Condicional de tipo swith. Consume menos recursos pero es mas limitada

Tiene la capacidad de evaluar el valor de una variable entre un número limitado de casos. Puede tener un numero indeterminado de casos con un número indeterminado de instrucciones. Acabar siempre con "break;" cada case, y el último caso es "default"

___________________________
ESTRUCTURAS DE CONTROL II
___________________________

//Condicional de tipo switch.
switch(variable){

    case "valor1";
        instrucción_1;
        instrucción_2;
        instrucción_n;
        break;

    case "valor2";
        instrucción_1;
        instrucción_2;
        instrucción_n
        break;
        
    case "valor3";
        instrucción_1;
        instrucción_2;
        instrucción_n
        break;
} 

practicas de condicionales 3

Estructuras de control iterativas
Bucles. Ejecutan una y otra vez las misma instrucciónes mientras se cumpla una instrucción.

For
Cuidado con estas estructuras porque consumen muchisimos recursos.

// 1.Declaración de contador
// 2.Condición de repeteción
// 3.Factor de incremento

for (1; 2; 3){

    instruccion_1;
    instruccion_2;
    instruccion_n;

}
