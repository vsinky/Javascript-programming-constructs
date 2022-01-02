const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid = false;
rl.question("ENTER SINGLE DIGIT NUMBER : ", function(Number) {

    switch (parseInt(Number)) {
        case 0:
            Number = "Zero";
            break;
        case 1:
            Number = "One";
            break;
        case 2:
            Number = "Two";
            break;
        case 3:
            Number = "Three";
            break;
        case 4:
            Number = "Four";
            break;
        case 5:
            Number = "Five";
            break;
        case 6:
            Number = "Six";
            break;
        case 7:
            Number = "Seven";
            break;
        case 8:
            Number = "Eight";
            break;
        case 9:
            Number = "Nine";
            break;

    }
    console.log(Number);

    rl.close();
});