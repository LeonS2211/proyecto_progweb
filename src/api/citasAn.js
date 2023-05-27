let AllcitasAn =
[
    {nombre: "Pepe Lucho", titulo: "Magister PCH", fecha: "23/04/2023 12:00 Am", curso: "Programación Web", link: "#"},
    {nombre: "Alonso Padrino", titulo: "Magister PCH", fecha: "23/04/2023 12:00 Am", curso: "Programación Web", link: "#"}

]

const save = (citasAn) => {
    AllcitasAn.push(citasAn)
}

const getAll = () => {
    return AllcitasAn;
}

const AllcitasAnAPI = {save, getAll}

export default AllcitasAnAPI