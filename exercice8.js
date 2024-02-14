// Exercice 8: Trier un tableau d'objets par plusieurs propriétés

function trierParProprietes(tableau, proprietes) {
    tableau.sort(function(a, b) {
        for (let propriete of proprietes) {
            let valeurA = a[propriete];
            let valeurB = b[propriete];

            if (valeurA < valeurB) {
                return -1;
            } else if (valeurA > valeurB) {
                return 1;
            }
        }
        return 0; 
    });
}

let personnes = [
    { nom: 'Léa', age: 30 },
    { nom: 'Nicolas', age: 25 },
    { nom: 'Emmanuel', age: 30 }
];

trierParProprietes(personnes, ['age', 'nom']);

console.log(personnes);
