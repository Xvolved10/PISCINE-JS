// Exercice 6: Filtrer un tableau d'objets par une plage de dates

function filtrerParPlageDeDates(objets, dateDebut, dateFin) {
    return objets.filter(objet => {
        let dateObjet = new Date(objet.date);
        return dateObjet >= dateDebut && dateObjet <= dateFin;
    });
}

let objets = [
    { id: 1, date: '2024-02-10' },
    { id: 2, date: '2024-02-15' },
    { id: 3, date: '2024-02-20' }
];

let dateDebut = new Date('2024-02-11');
let dateFin = new Date('2024-02-18');

let objetsFiltres = filtrerParPlageDeDates(objets, dateDebut, dateFin);
console.log(objetsFiltres); 
