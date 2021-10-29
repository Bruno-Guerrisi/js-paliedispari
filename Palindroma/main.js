/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const userWord = prompt('inserire una parola per verificare').trim().toLowerCase();

let wordOne = palindroma(userWord);

if(wordOne === userWord){
    alert('la parola è palindroma');
}
else{
    alert('la parola NON è palindroma');
}


/* function */

function palindroma(Word){

    let LetterUser = '';

    for(i=userWord.length - 1; i>-1; i--){

        LetterUser += userWord[i];
        console.log(LetterUser)

    }

    return LetterUser;

}