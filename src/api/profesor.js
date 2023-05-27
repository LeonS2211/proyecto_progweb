let profesores =
[
    {imagen: "profesor3.png", nombre: "Guillermo Salas", titulo: "Magister PCH", fecha: "Lunes, 23 de mayo", curso: "Programación Web", link: "#"},
    {imagen: "profesor3.png",nombre: "Roberto Siucho", titulo: "Magister PCH", fecha: "Lunes, 23 de mayo", curso: "Programación Web", link: "#"},
    {imagen: "profesor3.png",nombre: "Pedrro Flojete", titulo: "Magister PCH", fecha: "Lunes, 23 de mayo", curso: "Programación Web", link: "#"},

]

const save = (profesor) => {
    profesores.push(profesor)
}

const getAll = () => {
    return profesores;
}

const ProfesorApi = {save, getAll}

export default ProfesorApi