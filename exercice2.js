// Exercice 2: Trouver le plus grand nombre dans un tableau
var tableau = [2, 3, 1, 5, 4];
var max = tableau[0];
for (var i = 0; i < tableau.length; i++) {
    if (tableau[i] > max) {
        max = tableau[i];
    }
}
console.log(max);