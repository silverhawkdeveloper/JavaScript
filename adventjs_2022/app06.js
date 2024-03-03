//const cubeOfOne = createCube(1);
//const cubeOfTwo = createCube(2);
const cubeOfTree = createCube(3);

function createCube(size) {
    let cubo = '';
    const espacio = ' ';
    const salto = '\n';
    //Bucle superior
    const piezaVsup = "/\\";
    const piezaLsup = "_\\";
    for (let i = 1; i <= size; i++) {
        cubo += espacio.repeat(size - i) + piezaVsup.repeat(i) + piezaLsup.repeat(size) + salto;
    }

    //Bucle inferior
    const piezaVinf = "\\/";
    const piezaLinf = "_/";
    for (let i = 0; i < size; i++) {
        cubo += espacio.repeat(i) + piezaVinf.repeat(size-i) + piezaLinf.repeat(size);
        if (i < size-1 ) cubo += salto;
    }
    console.log(cubo);
    return cubo;
}

/**
 * /\_\
 * \/_/
 */

/**
 *  /\_\_\ 1
 * /\/\_\_\
 * \/\/_/_/
 *  \/_/_/ 1
 */

/**
 *   /\_\_\_\  2 
 *  /\/\_\_\_\ 1
 * /\/\/\_\_\_\
 * \/\/\/_/_/_/
 *  \/\/_/_/_/ 1
 *   \/_/_/_/  2
 */