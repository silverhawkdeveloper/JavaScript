/*const boxes = [ // true
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]*/
const boxes = [ // false
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

function fitsInOneBox(boxes) {
    let correcto = true;
    let caja = { l: 0, w: 0, h: 0 };

    try {
        boxes.sort(function (x, y) {
            if (x.l < y.l || x.w < y.w || x.h < y.h) { return -1; }
            if (x.l > y.l || x.w > y.w || x.h > y.h) { return 1; }
            return 0;
        });

        boxes.forEach((element) => {
            if (!correcto) throw correcto;
            caja.l < element.l && caja.w < element.w && caja.h < element.h ? correcto = true : correcto = false;
            caja.l = element.l, caja.w = element.w, caja.h = element.h;
        });
    } finally {
        return correcto;
    }
}

let prueba = fitsInOneBox(boxes);