let time = 0;

const cursos = [{
    id: '0001',
    nombre: "Node.JS",
    duracion: 32,
    valor: 0
}, {
    id: '0002',
    nombre: "Ingles",
    duracion: 64,
    valor: 200000
}, {
    id: '0003',
    nombre: "Bolsa de Valores",
    duracion: 32,
    valor: 150000
}];

let imprimirCurso = (id, callback) => {
    setTimeout(() => {
        let curso = cursos.find(curso => curso.id == id);
        let info = "=> Curso de " + curso.nombre + " su Id es " + curso.id + ",\n   Tiene una duración de " + curso.duracion + " horas y un valor de " + curso.valor + " pesos.";
        callback(info);
    }, time += 2000);
};

let listarCursos = () => {
    console.log("Se ofrecen los siguientes cursos:");
    cursos.forEach(curso => {
        imprimirCurso(curso.id, (info) => {
            console.log(info);
        });
    });
}

module.exports = {
    cursos,
    imprimirCurso,
    listarCursos
};