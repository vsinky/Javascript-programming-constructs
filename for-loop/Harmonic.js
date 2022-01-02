const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the Nth Number for harmonic series ", function(totalNumber) {
    let sumOfHarmonics = 1;
    let harmonics = 1;
    for (let i = 2; i <= totalNumber; i++) {
        harmonics = harmonics + "+" + 1 + "/" + i;
        sumOfHarmonics += 1 / i;
    }
    console.log("Harmonics : " + harmonics);
    console.log("Sum of harmonic : " + sumOfHarmonics);
    rl.close();
});