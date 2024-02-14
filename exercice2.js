// Exercice 2: Regrouper des éléments d'un tableau par propriété

function regrouperParPropriete(tableau, propriete) {
    return tableau.reduce(function(acc, obj) {
        let valeurPropriete = obj[propriete];

        if (!acc[valeurPropriete]) {
            acc[valeurPropriete] = [];
        }

        acc[valeurPropriete].push(obj);

        return acc;
    }, {});
}

let personnes = [
    { nom: 'Emmanuel', age: 30 },
    { nom: 'Maxime', age: 25 },
    { nom: 'Léa', age: 30 },
    { nom: 'Nicolas', age: 25 }
];

let personnesParAge = regrouperParPropriete(personnes, 'age');
console.log(personnesParAge);
