const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid = false;
rl.question("ENTER VALUE OF A : ", function(A) {
    rl.question("ENTER VALUE OF B : ", function(B) {
        rl.question("ENTER VALUE OF C : ", function(C) {

            let Exp1 = (A + B * C);
            console.log("Result of expression 1 is : " + Exp1);

            let Exp2 = (A % B + C);
            console.log("Result of expression 2 is :" + Exp2);

            let Exp3 = (C + A / B);
            console.log("Result of expression 3 is :" + Exp3);

            let Exp4 = (A * B + C);
            console.log("Result of expression 4 is :" + Exp4);

            if ((Exp1 > Exp2) && (Exp1 > Exp3) && (Exp1 > Exp4)) {
                console.log("Maximum result is : " + Exp1);
            } else if ((Exp2 > Exp1) && (Exp2 > Exp3) && (Exp2 > Exp4)) {
                console.log("Maximum result is : " + Exp2);
            } else if ((Exp3 > Exp1) && (Exp3 > Exp2) && (Exp3 > Exp4)) {
                console.log("Maximum result is : " + Exp3);
            } else {
                console.log("Maximum result is : " + Exp4);
            }

            if ((Exp1 < Exp2) && (Exp1 < Exp3) && (Exp1 < Exp4)) {
                console.log("Minimum result is : " + Exp1);
            } else if ((Exp2 < Exp1) && (Exp2 < Exp3) && (Exp2 < Exp4)) {
                console.log("Minimum result is : " + Exp2);
            } else if ((Exp3 < Exp1) && (Exp3 < Exp2) && (Exp3 < Exp4)) {
                console.log("Minimum result is : " + Exp3);
            } else {
                console.log("Minimum result is : " + Exp4);
            }
            rl.close();
        });
    });
});