// Exercice 3: Créer une fonction de débogage

function debug(message, ...variables) {
    console.log(`[DEBUG] ${message}`);

    variables.forEach((variable, index) => {
        console.log(`  - Variable ${index + 1}:`, variable);
    });
}

let x = 5;
let y = 'salut';
debug('Valeurs des variables :', x, y);