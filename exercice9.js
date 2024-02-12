// Exercice 9: Inverser une chaîne de caractères
var str = "Kayak";
var reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}

console.log(reverseStr);