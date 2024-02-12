// Exercice 7: Vérifier si un mot est un palindrome
function estPalindrome(mot) {
    mot = mot.toLowerCase();
    
    mot = mot.replace(/[^a-z]/g, '');

    return mot === mot.split('').reverse().join('');
}

console.log(estPalindrome("kayak")); 
console.log(estPalindrome("hello")); 
