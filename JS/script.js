/* 


Mail
Chiedi all’utente la sua email

controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati)

stampa un messaggio appropriato sull’esito del controllo.

-----------

1. crea prompt per chiedere mail all'utente
2. crea array della lista utenti autorizzati
3. crea ciclo for con all'interno le varie condizioni (if)  
4. stampa in pagina il messaggio di risposta adeguato

*/ 
/* chiedo la mail all'utente */
const email = prompt("What's your e-mail?");


/* creo array di utenti autorizzati */

const authorizedUsersList = ["damianop@gmail.com","riccardob@gmail.com","andreat@gmail.com","micheleg@gmail.com","gaetanof@gmail.com"];


let emailFound = false;

for (let i = 0; i < authorizedUsersList.length; i++) {
  
  if (authorizedUsersList[i] === email) {
    emailFound = true;
    
  }
  
}

if (emailFound == true) {
  document.getElementById("out-put-text").innerHTML = "You're one of us, Welcome!";
}

else  {
  document.getElementById("out-put-text").innerHTML = "Thanks for giving me your e-mail, you've been scammed";
};

if (email == null) {
  document.getElementById("out-put-text").innerHTML = " ";
}

/* ----------FINE PRIMO ESERCIZIO----------*/



/* DADI 

 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

  Stabilire il vincitore, in base a chi fa il punteggio più alto. 


  1. creo un bottone con evento onclick per lanciare i dadi
  2. genero un random number da 1 a 6 utilizzando random math
  3. dichiaro vincitore/perdente o pareggio con if statements

*/


function diceThrower() {

  const userDiceResult = Math.floor(Math.random() * 6) + 1;
  const computerDiceResult = Math.floor(Math.random() * 6) + 1;

  document.getElementById("user-dice").innerHTML = "User Dice: " + userDiceResult;
  document.getElementById("computer-dice").innerHTML =  "Computer Dice: " + computerDiceResult;

  if (userDiceResult > computerDiceResult) {
    document.getElementById("result-text").innerHTML = "User Wins";
  } 

  else if (userDiceResult == computerDiceResult) {
    document.getElementById("result-text").innerHTML = "Draw";
  }

  else {
    document.getElementById("result-text").innerHTML = "Computer Wins";

  };

}




