const opciones = {
    id: {
        demand: true,
        alias: 'i',
    },
    nombre: {
        demand: true,
        alias: 'n',
    },
    cedula: {
        demand: true,
        alias: 'x',
    },
}
const {
    cursos,
    imprimirCurso,
    listarCursos
} = require('./cursos');
const fs = require('fs');
const argv = require('yargs')
    .command('inscribir', 'Para Matricular un Curso', opciones)
    .argv

let curso = cursos.find(curso => curso.id == argv.i);
if (curso) {
    imprimirCurso(curso.id, (info) => {
        let texto = "Ha Matriculado el " + info;
        console.log(texto);
        texto += "\nGracias " + argv.n + ", la cedula con que registraste el curso es: " + argv.x + ".";
        fs.writeFile('matricula.txt', texto, (err) => {
            if (err) throw (err);
            console.log("Se Ha Guardado la Matricula");
        });
    });
} else {
    if (argv.i) {
        console.log("No se ha encontrado un curso con el id " + argv.i + ", Recuerde que");
    }
    listarCursos();
}