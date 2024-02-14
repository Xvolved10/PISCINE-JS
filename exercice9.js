// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test

function tousPassentTest(tableau, test) {
    return tableau.every(test);
}

let nombres = [2, 4, 6, 8, 10];

let result = tousPassentTest(nombres, nombre => nombre % 2 === 0);
console.log(result); 

result = tousPassentTest(nombres, nombre => nombre > 5);
console.log(result); 
