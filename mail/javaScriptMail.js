// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// QUI ricordatevi che non è concesso usare altro oltre quello che abbiam visto oggi 


// creaimao una lista mail  
const listMail = [ 'matteogun@gmail.com', 'pallopinco@gmail.com', 'push@live.it', 'Rsara@tiscali.it', 'pippo62@libero.it' ];
console.log(listMail);
let messaggio =document.createElement("h1");


// chiediamo ad un utente di inserire la propria mail
const newMail = prompt('Inserisci la tua mail: ');
let AcceptMail = 0;


// confrontiamo SE la mail inserita è presente nella lista di partenza 
for ( let i = 0; i <= listMail.length; i++)
{
    if( newMail == listMail[i])
    {
        AcceptMail = 1;
    }
}
// SE è presente consentiamo l'accesso all'utente 
if( AcceptMail == 0){
    AcceptMail='Email non autorizzata';
}
// ALTRIMENTI neghiamo l'accesso all'utente 
else{
    AcceptMail='Email autorizzata';
}

messaggio.append(AcceptMail)
console.log(AcceptMail);

contenitore.append(messaggio)