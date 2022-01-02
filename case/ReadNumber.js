const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid = false;
rl.question("ENTER NUMBER (1,10,100,1000,10000) : ", function(Number) {

    switch (parseInt(Number)) {
        case 1:
            Number = "Unit";
            break;
        case 10:
            Number = "Ten";
            break;
        case 100:
            Number = "Hundred";
            break;
        case 1000:
            Number = "Thousand";
            break;
        case 10000:
            Number = "Ten-Thousand";
            break;

    }
    console.log(Number);

    rl.close();
});