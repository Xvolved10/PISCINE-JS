// Exercice 8: Fusionner deux tableaux et supprimer les doublons

let tableau1 = [1, 2, 3, 4, 5, 6];
let tableau2 = [6, 7, 8, 9, 10];

let tableau3 = tableau1.concat(tableau2.filter(item => !tableau1.includes(item)));

console.log(tableau3);