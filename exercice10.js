// Exercice 10: Calculer la factorielle d'un nombre
var num = 10;
var factorielle = 1;

for (let i = 1; i <= num; i++) {
    factorielle *= i;
}

console.log(factorielle);