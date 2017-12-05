1. teconología cliente. Alta dependencia en el dispositivo
2. Multiplataforma
3. Tiempo de carga. Kb. Reducir al maximo el numero de caracteres

CONCEPTOS BÁSICO (bases universales de desarrollo software)

________________
Cómo incluir js 
_________________

-hoja externa script. una hoja externa = una solo petición. En principio intentar hacerlo siempre así porque es mas óptimo

-Código embebido. Desaprovechamos las caché

-Código inline. (Mantenbilidad Escabilidad reducida)
________________
Dónde incluir js 
________________
Orden de los recursos. Orden de carga en cascada en el navegador , por eso es necesario tener esto en cuenta
(Bloqueo de la carga/página. Todo lo que esté incluido en <head> incurre en ésto)

DOM (Document Object Model)
para javaScript cada entidad es un "objeto". Su motor se basa en una jerarquía de objectos. 

Todos los Objetos tienen métodos(acciones/capacidades) y propiedades (características).
Ejemplo: Coche 
    métodos: frenar, acelerar
    propiedades: potencia, color, dimensiones

Buenas prácticas 
no dejar comentarios innecesarios

_____________________
SALIDA DE DATOS
_____________________
-métodos de visualización de datos. Salida en la interfaz 
-árgumentos de los métodos. Información necesaria para que funcione el método.
Cada objeto tiene definido sus propios métodos y propiedades.

alert('valor');
console.log('valor');
console.error('valor');
document.write('valor');
_____________________
INTRODUCCIÓN DE DATOS
_____________________
Método prompt()
Método confirm()

_____________________
2-VARIABLES
_____________________

Unidades nominales de almacenamiento de información. Tienen dos etapas: declacración y asignación

Todas deben ser declaradas la primera vez que se utilizan, no es necesario volver a hacerlo, porque consume recursos ,significa reservar una porción de memoria para esa información.(redeclaración)
tipos de declaraciones:

Ejemplo
Restrictivas por orden 

    var miValor; redeclarciones
    let miValor; no redeclaraciones
    const;     no redeclaraciones, tiene que ser declarada y asignada al vez. Su valor no cambia
___________________________________
2.1-TIPOS DE VARIABLES SEGÚN SU VALOR
___________________________________

-Reglas Nomenclatua.
-nunca empieza con numeros.
-nada de espacios.
-cuidado con los carateres especiales (- etc...).
-Intentar escribir en inglés.
-Nombre descriptivos.
camelCase

Ejercicio
planteamiento
1-preguntar la edad
2-calculo de días
3-Salida de datos