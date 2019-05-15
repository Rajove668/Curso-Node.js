const opciones = {
    matematicas: {
        default: 0,
        alias: 'm',
    },
    ingles: {
        default: 0,
        alias: 'i',
    },
    algoritmos: {
        demand: true,
        alias: 'a',
    },
}
const argv = require('yargs')
    .command('promedio', 'Calcular el Promedio', opciones)
    .argv

console.log(argv.matematicas);
console.log(argv);
console.log("El nombre del estudiante es: " + argv.nombre);
console.log("Su promedio es: " + (argv.m + argv.i + argv.a) / 3);

//node archivos --matematicas=5 --nombre=Ramiro
//node archivos promedio -m=4 -i=5 -a=5 --nombre=ramiro