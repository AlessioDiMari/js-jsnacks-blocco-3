// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande
// al massimo quanto il numero di elementi dell’array).
// Es:abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio
// così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori
// che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così
// tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
// [2, 3, 4]

// Dichiaro il primo array
const numbersArray = [0, 1, 2, 3, 4, 5, 6];

// Dichiaro le due posizioni
const minPosition = 2;
const maxPosition = 6;

// Dichiaro la funzione con i parametri
cutArray(numbersArray, minPosition, maxPosition);

// Creo la funzione che taglierà l'array
function cutArray(array, minPosition, maxPosition){

    // Dichiaro il nuovo array tagliato
    const newArray = [];
    

}