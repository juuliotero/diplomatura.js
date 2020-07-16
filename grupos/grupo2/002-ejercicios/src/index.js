// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './baseDeDatos';
import { helpers } from './helpers';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

// 3) Implementar una función que obtenga un profesor por Id

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

function insertarProvincia(nombre) {
    let idObtenido = helpers.ultimoId(database.provincias);
    database.provincias.push({ id: idObtenido + 1, nombre: nombre });
    return idObtenido + 1;
}
// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres

function getMateria(idMateria) {
    let materia = (database.materias.find(elem => elem.id === idMateria));
    let idProfesores = materia.profesores;
    let profesores = '';
    let resultados = [];
    let prof = [];
    idProfesores.forEach(idP => {
        profesores = (database.profesores.find(elem => elem.id === idP));
        prof.push(profesores.nombre);
    });
    resultados.push({ materia: materia.nombre, universidad: (database.universidades.find(elem => elem.id === materia.universidad).nombre), profesores: prof });

    return resultados;
}

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

function mostrarDatos() {
    let calificaciones = database.calificaciones;
    let resultados = [];
    calificaciones.forEach(calificacion => {
        let nuevo = new Object();
        nuevo.alumno = database.alumnos.find(alumno => alumno.id === calificacion.alumno).nombre;
        nuevo.materia = database.materias.find(materia => materia.id === calificacion.materia).nombre;
        nuevo.nota = calificacion.nota;
        resultados.push(nuevo);
    })
    resultados.forEach(resultado => {
        console.log(' \nNOTAS DE ALUMNOS');
        console.log('----------------');
        console.log(resultado.alumno.toString().toUpperCase());
        console.log(resultado.materia, ': ', resultado.nota);
    });
}

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas

function notaAlumno(nombreAlumno, nombreMateria, notaAlumno) {
    let idAlumno;
    let idMateria;
    let materia = database.materias.find(materia => materia.nombre === nombreMateria);
    if (!materia) {
        idMateria = helpers.ultimoId(database.materias) + 1
        database.materias.push({ id: idMateria, nombre: nombreMateria });
    } else {
        idMateria = materia.id;
    }
    let alumno = database.alumnos.find(alumno => alumno.nombre === nombreAlumno);
    if (!alumno) {
        idAlumno = helpers.ultimoId(database.alumnos) + 1;
        database.alumnos.push({ id: idAlumno, nombre: nombreAlumno });
    } else {
        idAlumno = alumno.id;
    }
    database.calificaciones.push({ alumno: idAlumno, materia: idMateria, nota: notaAlumno });
}
