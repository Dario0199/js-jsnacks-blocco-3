// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

const BasketPlayer = {
    cod: genPlayerCod(),
    firstName: 'LeBron',
    lastName: 'James',
    age: 36,
    mediaPoint: genNumber(0, 50),
    successThreePoint: genNumber(0, 100)
}
console.table(BasketPlayer);


const {firstName, lastName, age, cod} = BasketPlayer

const basketPlayers = [
    {
        cod: genPlayerCod(),
        firstName: 'LeBron',
        lastName: 'James',
        age: 36,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'Russel',
        lastName: 'Westbrook',
        age: 32,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'Antony',
        lastName: 'Davis',
        age: 28,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'Stephen',
        lastName: 'Curry',
        age: 33,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'Kevin',
        lastName: 'Durant',
        age: 33,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'James',
        lastName: 'harden',
        age: 32,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'LeBron',
        lastName: 'James',
        age: 36,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'Chris',
        lastName: 'Paul',
        age: 36,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'Devin',
        lastName: 'Booker',
        age: 25,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    },
    {
        cod: genPlayerCod(),
        firstName: 'Jayson',
        lastName: 'Tatum',
        age: 23,
        mediaPoint: genNumber(0, 50),
        successThreePoint: genNumber(0, 100)
    }
];
console.table(basketPlayers);

const topBasketPlayers = basketPlayers.filter( (player) => player.mediaPoint > 35 && player.successThreePoint > 80);
console.table(topBasketPlayers);



function genNumber(min, max){
        return Math.floor( Math.random() *(max - min + 1))+ min;
}

function genPlayerCod(){
    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let codLetter = '';
    let codNumber = '';

    for(let i = 0; i < 3; i++){
        codLetter += letter.charAt( genNumber(0, letter.length - 1));
        console.log(codLetter);

        codNumber += genNumber(1, 9);
        console.log(codNumber);
        return codLetter + codNumber;
    }
}