/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


/* pari e dispari */

const evenOdd = prompt('inserire pari o dispari') ;

let userChoice = evenOdd;

if(userChoice == 'pari'){
    userChoice = 'pari';
} 
else if(userChoice == 'dispari'){
    userChoice = 'dispari';
} else{
    alert('valore non valido le verra assegnato pari');
    userChoice = 'pari';
}

/* creazione numeri */
const numberUser = parseInt( prompt('inserire un numero da 1 a 5') );

if(numberUser < 6 && numberUser > 0){

}
else{
    alert('il numero inserito non è valido vi verrà assegnato un numero casuale')

}

let numComputer = randomNum();
alert(`il numero random del computer è ${numComputer}`);


/* somma e risultato */

let ris;
let somma = evenOrOdd(numberUser, numComputer);
console.log(somma);

if(ris === userChoice){
    alert(`la somma dei due numeri ${numberUser} e ${numComputer} è: ${somma}. Dunque vince il player con ${userChoice}`);
}
else {
    alert(`la somma dei due numeri ${numberUser} e ${numComputer} è: ${somma}. Dunque perde il player con ${userChoice}`);
}

/* function */

function randomNum(){

    let randomNumber = Math.floor(Math.random() * 6) +1;
    return randomNumber;

}


function evenOrOdd(num1, num2){

    let evenOrOdd = num1 + num2;


    if (evenOrOdd % 2 == 0){
        ris = 'pari';
    }
    else {
        ris = 'dispari';
    }

    return evenOrOdd;
}