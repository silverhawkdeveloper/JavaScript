/**
Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

Cada 7 segundos, los leds cambian de estado de esta forma:

    Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
    Si el led está encendido, se mantiene siempre encendido.

Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero. Por ejemplo:

const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

A tener en cuenta

    El array siempre tendrá al menos un led encendido.
    El array puede tener cualquier longitud.
    Si todos los leds están encendidos, el tiempo es 0.

 */

/*
function countTime(leds) {
    let segundos = 7;
    let tiempo = 0;
    let step = 0;
    let array = [];
    while (leds.includes(0)) {
        switch (leds[0]) {
            case 0:
                if (step == 1) tiempo += segundos;
                for (let i = 0; i < leds.length; i++) {
                    const elemento = leds[i];
                    if (elemento == 0 && leds[i - 1] == 1) {
                        tiempo += segundos;
                        leds[i] = 1;
                    }
                    if (leds.length == i + 1 && leds[0] == 0) leds[0] = 1, tiempo += segundos;
                }
                step++;
                break;
            case 1:
                for (let i = 0; i < leds.length; i++) {
                    const elemento = leds[i];
                    if (elemento == 1 && leds[i + 1] == 0) {
                        array.push(i + 1);
                    }
                }

                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    leds[element] = 1;
                }
                array = [];
                tiempo += segundos;
                break;
        }

    }
    return tiempo;
}*/

const leds1 = [0, 1, 1, 0, 1];   //7
const leds2 = [0, 0, 0, 1];      //21
const leds3 = [0, 0, 1, 0, 0];   //28
const leds4 = [1, 0, 0, 1, 0, 0];//14
let p = countTime(leds3);

function countTime(array) {
    let tiempo = 0;
    const segundos = 7;
    let arrayEncendido = [];

    do {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const elementIzq = array[i - 1];
            if (element == 0 && elementIzq == 1) {
                arrayEncendido.push(i);
            }
        }
        for (let i = 0; i < arrayEncendido.length; i++) {
            const element = arrayEncendido[i];
            array[element] = 1;
        }
        tiempo += segundos;
        arrayEncendido = [];

        array.some(0,1)

        array[0] = 1;

    } while (array.includes(0));

    return tiempo;
}