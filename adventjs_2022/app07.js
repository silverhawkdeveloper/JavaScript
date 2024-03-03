/**
    - Crea una función getGiftsToRefill que reciba tres Array como parámetros.
    - La función debe devolver un Array con los regalos que hay que reponer.
    - Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
    - Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
    - Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos 
    que hay que reponer.

Por ejemplo, si tenemos los siguientes almacenes:

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
 */

const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

function getGiftsToRefill(a1, a2, a3) {
    let reponer = [];

    a1.forEach(elemento1 => {
        if (!a2.includes(elemento1) && !a3.includes(elemento1) && !reponer.includes(elemento1)) {
           reponer.push(elemento1)
        }
    });

    a2.forEach(elemento1 => {
        if (!a1.includes(elemento1) && !a3.includes(elemento1) && !reponer.includes(elemento1)) {
           reponer.push(elemento1)
        }
    });

    a3.forEach(elemento1 => {
        if (!a1.includes(elemento1) && !a2.includes(elemento1) && !reponer.includes(elemento1)) {
           reponer.push(elemento1)
        }
    });

    return reponer;
}

let prueba = getGiftsToRefill(a1, a2, a3);
console.log(prueba);