let quotient = 4.4 / 2;//Divide One Decimal by Another with JavaScript

const remainder = 11 % 3;//Finding a Remainder in JavaScript

let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;//Compound Assignment With Augmented Addition

let a1 = 11;
let b1 = 9;
let c1 = 3;
a1 = a1 - 6;
b1 = b1 - 15;
c1 = c1 - 1;//Compound Assignment With Augmented SubtractionPassed

let a2 = 5;
let b2 = 12;
let c2 = 4.6;
a2 *= 5;
b2 *= 3;
c2 *= 10;//Compound Assignment With Augmented Multiplication

let a3 = 48;
let b3 = 108;
let c3 = 33;
a3 /= 12;
b3 /= 4;
c3 /= 11;//Compound Assignment With Augmented Division

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; //Escaping Literal Quotes in Strings

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";//Escape Sequences in Strings

const myStr = "This is the start. " + "This is the end.";//Concatenating Strings with Plus Operator

let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';//Concatenating Strings with the Plus Equals Operator

const myName = "freeCodeCamp";
const myStr = "Hello, our name is " + myName + "and I am well!";//Constructing Strings with Variables

const someAdjective = "awesome!";
let myStr = "Learning to code is ";
myStr += someAdjective;//Appending Variables to Strings

let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;//Find the Length of a String

let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // Use Bracket Notation to Find the First Character in a String

let myStr = "Jello World";
myStr = "Hello World"; // Understand String Immutability

const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];//Use Bracket Notation to Find the Nth Character in a String

const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; //Use Bracket Notation to Find the Last Character in a String

const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Use Bracket Notation to Find the Nth-to-Last Character in a String

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My " + myNoun + " is " + myAdjective + " and he " + myVerb + " " + myAdverb + "."; // Word Blanks

const myArray = ['vit', 37];//Store Multiple Values in one Variable using JavaScript Arrays

const myArray = [[1]];//Nest one Array within Another Array

const myArray = [50, 60, 70];
let myData = myArray[0]//Access Array Data with Indexes

const myArray = [18, 64, 99];
myArray[0] = 45;//Modify Array Data With Indexes

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];//Access Multi-Dimensional Arrays With Indexes

const myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog', 3]);//Manipulate Arrays With push()

const myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop();//Manipulate Arrays With pop()

const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift();//Manipulate Arrays With shift()

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])//Manipulate Arrays With unshift()

const myList = [["Chocolate Bar", 15], ['milk', 35], ['beer', 30], ['onion', 11], ['salad', 137]];//Shopping List

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();//Write Reusable JavaScript with Functions

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);//Passing Values to Functions with Arguments

function timesFive(arg) {
    return arg * 5;
}//Return a Value from a Function with Return

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}//Global Scope and Functions

function myLocalScope() {
    var myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);//Local Scope and Functions

const outerWear = "T-Shirt";

function myOutfit() {
    let outerWear = 'sweater';
    return outerWear;
}
myOutfit();//Global vs. Local Scope in Functions

let sum = 0;
function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}
addThree();
addFive();//Understanding Undefined Value returned from a Function

let processed = 2;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);//Assignment with a Returned Value

function nextInLine(arr, item) {
    arr.push(item);
    let rem = arr.shift();
    return rem;
}
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));//Stand in Line

function welcomeToBooleans() {
    return true;//Understanding Boolean Values
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true';
    }
    return 'No, that was false';
}//Use Conditional Logic with If Statements

function testEqual(val) {
    if (val == 27) {
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);//Comparison with the Equality Operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);//Comparison with the Strict Equality Operator

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");//Practice comparing different values

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);//Comparison with the Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);//Comparison with the Strict Inequality Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
testGreaterThan(10);//Comparison with the Greater Than Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);//Comparison with the Greater Than Or Equal To Operator

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);//omparison with the Less Than Operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);//Comparison with the Less Than Or Equal To Operator

function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);//Comparisons with the Logical And Operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);//Comparisons with the Logical Or Operator