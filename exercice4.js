// Exercice 4: Trouver un élément dans un tableau d'objets
var tableau = [pomme, orange, bananne, fraise, abricot, framboise];
var resultat = [];
for (var i = 0; i < tableau.length; i++) {
    if (tableau[i].type == "pomme") {
        resultat.push(tableau[i]);
    }
}
console.log(resultat);
