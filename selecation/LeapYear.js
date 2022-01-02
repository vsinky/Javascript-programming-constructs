let Year = 2022;

let A = (Year % 4);
let B = (Year % 100);
let C = (Year % 400);

if (A == 0) {
    console.log("LEAP YEAR");
} else if (B != 0) {
    console.log("NOT A LEAP YEAR");
} else if (C == 0) {
    console.log("LEAP YEAR");
} else {
    console.log("NOT A LEAP YEAR");
}