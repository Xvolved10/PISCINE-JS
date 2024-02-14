// Exercice 5: Créer une fonction de temporisation

function temporiser(callback, delai) {
    setTimeout(callback, delai);
}

console.log("Début de la temporisation");
temporiser(() => {
    console.log("Fin de la temporisation après 2 secondes");
}, 2000);
