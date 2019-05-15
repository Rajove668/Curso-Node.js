console.log('Hola Mundo');

function promedio1(n_1, n_2, n_3) {
    let resultado = (n_1 + n_2 + n_3) / 3;
    console.log("El promedio 1 es: " + resultado);
}

let promedio2 = (n_1, n_2, n_3, callback) => {
    setTimeout(() => {
        let resultado = (n_1 + n_2 + n_3) / 3;
        callback(resultado);
    }, /*2000*/ 0);
}

let promedio3 = (n_1, n_2, n_3) => console.log("El promedio 3 es: " + (n_1 + n_2 + n_3) / 3);


promedio1(4.5, 4.2, 4.8);
promedio2(3.5, 3.2, 3.8, (resultado) => {
    console.log("El promedio 2 es: " + resultado);
});
promedio3(2.5, 2.2, 2.8);