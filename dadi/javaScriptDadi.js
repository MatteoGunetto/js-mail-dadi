// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// settiamo le variabili
const contenitore = document.getElementById("contenitore");
let utente, computer, vicintore;
let risultato =document.createElement("h1");

// creiamo due generatori di numeri random 

// generatore numeri random computer 
computer = Math.floor(Math.random() *  (6) +1) ;
console.log(computer);

// generatore numeri random utente 
utente = Math.floor(Math.random() *  (6) +1);
console.log(utente);

// confrontiamo i due numneri generati

// vicitore utente
if (utente > computer){
 
    // console.log('Utente ha vinto!')
    vincitore = "Utente ha vinto!"
}

// vincitore computer
else if (utente < computer){
    // console.log('Computer ha vinto!')
    vincitore="Computer ha vinto!"
}
// pareggio

else{
    // console.log('Pareggio!')
    vincitore="Pareggio"

}
console.log(vincitore)
risultato.append(vincitore)

contenitore.append(risultato)




