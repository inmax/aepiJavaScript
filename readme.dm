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

Dónde incluir js 
Orden de los recursos. Orden de carga en cascada en el navegador , por eso es necesario tener esto en cuenta
(Bloqueo de la carga/página. Todo lo que esté incluido en <head> incurre en ésto)

DOM (Document Object Model)
para javaScript cada entidad es un "objeto". Su motor se basa en una jerarquía de objectos. El 

Todos los Objetos tienen métodos(acciones/capacidades) y propiedades (características).
Ejemplo: Coche 
    métodos
    propiedades

Buenas prácticas 
no dejar comentarios

SALIDA DE DATOS
-métodos de visualización de datos. Salida en la interfaz 
-árgumentos de los métodos. Información necesaria para que funcione el método.
Cada objeto tiene definido sus propios métodos y propiedades.

INTRODUCCIÓN DE DATOS
Método prompt()
Método confirm()

VARIABLES
Unidades nominales de almacenamiento de información. Tienen dos etapas: declacración y asignación
Todas deben ser declaradas la primera vez que se utilizan, no es necesario volver a hacerlo, porque consume recursos ,significa reservar una porción de memoria para esa información.
tipos de declaraciones (redeclaración):  
Ejemplo
Restrictivas por orden 
    var miValor; redeclarciones
    let miValor; no redeclaraciones
    const;     no redeclaraciones, tiene que ser declarada y asignada al vez. Su valor no cambia

TIPOS DE VARIABLES SEGÚN SU VALOR
