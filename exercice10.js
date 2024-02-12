// Exercice 10: Convertir une chaîne de caractères en camelCase
var str = String
var camelCase = str.prototype.camelCase = function() {
    return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index == 0? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};

console.log(camelCase.call("salut moi je m'appelle maxime"));
