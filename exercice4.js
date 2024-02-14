// Exercice 4: Aplatir un tableau de tableaux

function aplatirTableau(tableau) {
    return tableau.reduce(function(acc, element) {
        return acc.concat(element);
    }, []);
}

let tableauDeTableaux = [[1, 2], [3, 4], [5, 6]];
let tableauAplati = aplatirTableau(tableauDeTableaux);
console.log(tableauAplati); 
