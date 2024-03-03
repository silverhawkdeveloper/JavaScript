//const packOfGifts = ["book", "doll", "ball"];
//const reindeers = ["dasher", "dancer"];
const packOfGifts = ["book", "doll", "ball", "egg"];
const reindeers = ["dasher", "dancer"];
// El pack de regalos pesa 4 + 4 + 4 = 12.
// Los renos pueden llevar (2 * 6) + (2 * 6) = 24.
// Por lo tanto, Santa Claus puede entregar 2 cajas de regalos.

// El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

function distributeGifts(packOfGifts, reindeers) {
    let pesoRegalos = 0;
    let cargaRenos = 0;
    let cajasEntrega = 0;
    try {
        packOfGifts.forEach(function (element) {
            pesoRegalos += element.length;
        });
        reindeers.forEach(function (element) {
            cargaRenos += element.length * 2;
        });
        pesoRegalos < cargaRenos ? cajasEntrega = Math.trunc(cargaRenos / pesoRegalos) : 
            cajasEntrega = 0;
    } finally {
        return cajasEntrega;
    }
}

let entrega = distributeGifts(packOfGifts, reindeers);