// Exercice 1: Supprimer les éléments falsy d'un tableau

function supprimerFalsyElements(tableau) {
    return tableau.filter(function(element) {
        return element;
    });
}

let tableau = [0, 1, '', 'salut', false, true, null, undefined, NaN];
let tableauSansFalsy = supprimerFalsyElements(tableau);
console.log(tableauSansFalsy); 

