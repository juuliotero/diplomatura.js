// export const delay = (mensaje, milisegundos) => {
//     setTimeout(function () { console.log(mensaje) }, milisegundos);
// }

export const delay = (milisegundos) => {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, milisegundos);
    });
}

export const run = async () => {
    console.log(1);
    let rta1 = await delay(1000);
    console.log('termino 1')
    console.log(2);
    let rta2 = await delay(2000);
    console.log('termino 2')
    console.log(3);
    let rta3 = await delay(3000);
    console.log('termino 3')
}

// export const run = () => {
//     console.log(1);
//     delay('Terminó 1', 3000);
//     console.log(2);
//     delay('Terminó 2', 2000);
//     console.log(3);
//     delay('Terminó 3', 1000);
// }