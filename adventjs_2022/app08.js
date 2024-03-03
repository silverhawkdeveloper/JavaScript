/*
Reto #8: ¡Necesitamos un mecánico!

Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, 
pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo 
después de eliminar, como máximo, un carácter.
(Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda).

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla.

Ejemplos:
checkPart("uwu") // true
"uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
"miidim" puede ser un palíndromo después de eliminar la primera "i" ya que "midim" es un palíndromo

checkPart("midu") // false
"midu" no puede ser un palíndromo después de eliminar un carácter
*/

checkPart("danilleinad");

function checkPart(part) {
    let booleano = true;
    let primeraMitad;
    let segundaMitad;
    let caracterMedio;
    let arrayPrimero = new Array();
    let arraySegundo = new Array();

    //Coger el string y dividirlo por la mitad, si no es par nos quedamos con el caracter del medio aparte.
    let longitud = part.length;
    let mitadCadena = longitud / 2;
    let esPar = longitud % 2 === 0;

    if (esPar == true) {
        primeraMitad = part.slice(0, mitadCadena);
        segundaMitad = part.slice(mitadCadena, longitud);
    } else {
        mitadCadena = Math.trunc(mitadCadena);
        primeraMitad = part.slice(0, mitadCadena);
        caracterMedio = part.at(mitadCadena);
        segundaMitad = part.slice(mitadCadena + 1, longitud);
    }

    cargarArray(arrayPrimero, primeraMitad, 0);
    cargarArray(arraySegundo, segundaMitad, 1);

    for (let index = 0; index < arrayPrimero.length && booleano == true; index++) {
        const element1 = arrayPrimero[index];
        const element2 = arraySegundo[index];
        if (element1 !== element2 && arrayPrimero.length == (index + 1)) {
            booleano = true;
        } else if (element1 == element2) {
            booleano = true;
        } else {
            booleano = false;
        }
    }

    function cargarArray(array, string, reverse) {
        for (let index = 0; index < string.length; index++) {
            array[index] = string.at(index);
        }
        if (reverse == 1) { array.reverse() }
    }

    return booleano
}