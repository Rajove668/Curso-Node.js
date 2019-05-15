//const estudiante1 = require('./calculos');
const {
    estudiante,
    obtenerPromedio
} = require('./calculos'); //Destructuración
const fs = require('fs');

let {
    nombre,
    edad: anos,
    notas: {
        matemáticas,
        ingles,
        algoritmos
    }
} = estudiante;

console.log(estudiante);

console.log('EL promedio de ' + nombre + ' es: ' + obtenerPromedio(algoritmos, ingles, matemáticas) + ', y tiene ' + anos + ' años.');

let crearArchivo = (estudiante) => {
    texto = "El nombre del estudiante es " + nombre + '\n' + "Ha obtenido un promedio de: " + obtenerPromedio(algoritmos, ingles, matemáticas);
    fs.writeFile('promedio.txt', texto, (err) => {
        if (err) throw (err);
        console.log("Se Ha Creado el Archivo");
        
    });
};  

crearArchivo(estudiante);