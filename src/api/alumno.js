let alumnos =
[
    {imagen: "alumno2.jpg",nombre: "Paolo Guerrero", titulo: "Estudiante", fecha: "Lunes, 23 de mayo", curso: "Programación Web", link: "#"},
    {imagen: "alumno2.jpg", nombre: "Jefferson Farfan", titulo: "Estudiante", fecha: "Lunes, 23 de mayo", curso: "Programación Web", link: "#"},
]

const save = (alumno) => {
    alumnos.push(alumnos)
}

const getAll = () => {
    return alumnos;
}

const AlumnoApi = {save, getAll}

export default AlumnoApi