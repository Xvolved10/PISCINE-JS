// Exercice 3: Filtrer les nombres pairs d'un tableau
var tableau = [1,2,3,4,5,6,7,8,9];
var resultat = [];
for (var i = 0; i < tableau.length; i++) {
    if (tableau[i] % 2 == 0) {
        resultat.push(tableau[i]);
    }
}
console.log(resultat);