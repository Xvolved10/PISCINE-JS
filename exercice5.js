// Exercice 5: Compter les occurrences d'une lettre dans une chaîne
var chaîne = "Hello World";
var resultat = 0;
for (var i = 0; i < chaîne.length; i++) {
    if (chaîne[i] == "l") {
        resultat++;
    }
}
console.log(resultat);
