const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter\n1.Feet to Inch\n2.Feet to Meter\n3.Inch to Feet\n4.Meter to Feet");

r1.question("ENTER CONVERSION NUMBER : ", function(Number) {

    switch (parseInt(Number)) {
        case 1:
            r1.question("Enter Feet: ", function(feet) {
                inch = feet * 12;
                console.log("Inch:" + inch);
                r1.close();
            });
            break;
        case 2:
            r1.question("Enter feet: ", function(feet) {
                meter = feet / 3.2808;
                console.log("Meter:" + meter);
                r1.close();
            });
            break;
        case 3:
            r1.question("Enter Inch: ", function(inch) {
                feet = inch / 12;
                console.log("Feet:" + feet);
                r1.close();
            });
            break;
        case 4:
            r1.question("Enter Meter: ", function(meter) {
                feet = meter * 3.2808399;
                console.log("Feet: " + feet);
                r1.close();
            });
            break;
    }
});