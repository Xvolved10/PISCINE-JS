// Exercice 7: Implémenter une fonction de réduction personnalisée

function reductionPersonnalisee(tableau, fonctionReduction, valeurInitiale) {
    let resultat = valeurInitiale;

    for (let i = 0; i < tableau.length; i++) {
        resultat = fonctionReduction(resultat, tableau[i]);
    }

    return resultat;
}

let tableau = [1, 2, 3, 4, 5];

let somme = reductionPersonnalisee(tableau, (acc, val) => acc + val, 0);
console.log("Somme des éléments du tableau:", somme); 

let produit = reductionPersonnalisee(tableau, (acc, val) => acc * val, 1);
console.log("Produit des éléments du tableau:", produit); 
