// Scrivi una funzione che accetti una stringa 
// come argomento e la restituisca girata (es. "Ciao" -> "oaiC")


// Inizializzo l'inputp dell'utente e l'output del codice
const userString = document.getElementById("user-string");

let flippedString = document.getElementById("flipped-string");


// Creo una funzione che trasformi la stringa che l'utente inserirà
// all'interno dell'input in un array di caratteri, inverta questo array
// e stampi in pagina la stringa invertita

function stringInverter(){

    // Memorzzo il valore dell'input in a variabile
    let stringElement = userString.value;

    // Trasformo il valore dell'input(la stringa)
    // in un array di caratteri
    let stringArray = stringElement.split("");
    

}