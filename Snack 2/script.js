// Scrivi una funzione che fonda due array presi come parametri
// (date per scontato che abbiano lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// Dichiaro i due array
const arrayAcciaio1 = ["primo acciaio 1", "secondo acciaio 1", "terzo acciaio 1"];

const arrayAcciaio2 = ["primo acciaio 2", "secondo acciaio 2", "terzo acciaio 2"];

// Creo la funzione che "fonderà" i due array

function forgia() {

    // Dichiaro l'array risultante
    let acciaioDamasco = [];
    
    // Creo un ciclo for per unire i due array
    for( let i = 0; i < arrayAcciaio1.length; i++){
        acciaioDamasco.push(arrayAcciaio1[i], arrayAcciaio2[i]);
    }
   
    console.log(acciaioDamasco)
}