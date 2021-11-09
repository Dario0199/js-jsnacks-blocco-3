// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

const numbers = [5, 7, 15, 43, 65]
console.log('numeri', numbers);


const squaredNumbers = numbers.map( (number) => {
    return Math.pow(number, 2)
});

// const squaredNumbers = numbers.map( number => number = Math.pow(number, 2)
// );

console.log('Numeri elevati al quadrato', squaredNumbers);
