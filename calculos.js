let estudiante = {
    nombre: 'Ramiro',
    edad: 22,
    notas: {
        matemáticas: 4,
        ingles: 3,
        algoritmos: 5
    }
};

let obtenerPromedio = (n_1, n_2, n_3) => (n_1 + n_2 + n_3) / 3;

module.exports = {
    estudiante,
    obtenerPromedio
};