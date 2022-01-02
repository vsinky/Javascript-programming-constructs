const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid = false;
rl.question("enter the DAY : ", function(Date) {
    rl.question("enter the MONTH :  ", function(Month) {

        if ((Month == 4 || Month == 5) && (Date > 1) && (Date < 31)) {
            console.log("TRUE");
        } else if ((Month == 3 || Month == 6) && (Date > 20) && (Date < 20)) {
            console.log("TRUE");
        } else {
            console.log("FALSE");
        }

        rl.close();
    });
});