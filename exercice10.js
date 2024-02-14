// Exercice 10: Exécuter des promesses en série

async function executerPromessesEnSerie(promesses) {
    let resultats = [];
    for (let promesse of promesses) {
        let resultat = await promesse();
        resultats.push(resultat);
    }
    return resultats;
}

async function promesse1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Résultat de la promesse 1"), 1000);
    });
}

async function promesse2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Résultat de la promesse 2"), 1500);
    });
}

async function promesse3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Résultat de la promesse 3"), 2000);
    });
}

let promesses = [promesse1, promesse2, promesse3];

executerPromessesEnSerie(promesses)
    .then(resultats => {
        console.log("Résultats des promesses en série :", resultats);
    })
    .catch(error => {
        console.error("Une erreur est survenue :", error);
    });
