// Stampa numeri da 1 a 100
// multipli di 3 stampo fizz
// multipli di 5 stampo buzz
// multipli di 3-5 stampo fizzbuzz

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}fizzbuzz`);
    } else if (i % 3 === 0) {
        console.log(i, "fizz");
    } else if (i % 5 === 0) {
        console.log(i, "buzz");
    }
}

