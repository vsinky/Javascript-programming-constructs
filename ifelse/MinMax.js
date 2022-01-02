var minimum, maximum;
let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 999) + 100;
let num3 = Math.floor(Math.random() * 999) + 100;
let num4 = Math.floor(Math.random() * 999) + 100;
let num5 = Math.floor(Math.random() * 999) + 100;
console.log("RandomNumbers are : " + num1, num2, num3, num4, num5);

if ((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)) {
    console.log(num1 + " is maximum number");
} else if ((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)) {
    console.log(num2 + " is maximum number");
} else if ((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5)) {
    console.log(num3 + " is maximum number");
} else if ((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5)) {
    console.log(num4 + " is maximum number");
} else {
    console.log(num5 + " is maximun number");
}

if ((num1 < num2) && (num1 < num3) && (num1 < num4) && (num1 < num5)) {
    console.log(num1 + " is minimun number");
} else if ((num2 < num1) && (num2 < num3) && (num2 < num4) && (num2 < num5)) {
    console.log(num2 + " is minimun number");
} else if ((num3 < num1) && (num3 < num2) && (num3 < num4) && (num3 < num5)) {
    console.log(num3 + " is minimum number");
} else if ((num4 < num1) && (num4 < num2) && (num4 < num3) && (num4 < num5)) {
    console.log(num4 + " is minimum number");
} else {
    console.log(num5 + " is minimum number");
}