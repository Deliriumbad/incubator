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

function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4);//Introducing Else Statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseIf(7);//Introducing Else If Statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);//Logical Order in If Else Statements

function testSize(num) {
    if (num < 5) {
        return 'Tiny';
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    } else {
        return 'Huge';
    }
    return "Change Me";
}
testSize(7);//Chaining If Else Statements

function caseInSwitch(val) {
    let answer = '';
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}//Selecting from Many Options with Switch Statements

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
    }
    return answer;
}
switchOfStuff(1);//Adding a Default Option in Switch Statements

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
sequentialSizes(1);//Multiple Identical Options in Switch Statements

function chainToSwitch(val) {
    let answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";;
            break;
    }
    return answer;
}
chainToSwitch(42);//Replacing If Else Chains with Switch

function isLess(a, b) {
    return a < b;
}
isLess(10, 15);//Returning Boolean Values from Functions

// Setup
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);//Return Early Pattern for Functions

const myDog = {
    'name': 'Max',
    'legs': 4,
    'tails': 1,
    'friends': ['a lot of']//Build JavaScript Objects
};

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;//Accessing Object Properties with Dot Notation

const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];//Accessing Object Properties with Bracket Notation

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];//Accessing Object Properties with Variables


const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog["name"] = "Happy Coder"//Updating Object Properties

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";//Add New Properties to a JavaScript Object

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails//Delete Properties from a JavaScript Object

function phoneticLookup(val) {
    let result = "";
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }
    result = lookup[val]
    return result;
}
phoneticLookup("charlie");//Using Objects for Lookups

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}//Testing Objects for Properties

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Sting",
        "title": "English Man",
        "release_year": 1999,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];//Manipulating Complex Objects

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside['glove box'];//Accessing Nested Objects

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
const secondTree = myPlants[1].list[1];//Accessing Nested Arrays

const myArray = [];
let i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}//Iterate with JavaScript While Loops

const myArray = [];
for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}//Iterate with JavaScript For Loops

const myArray = [];
for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
}//Iterate Odd Numbers With a For Loop

const myArray = [];
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}//Count Backwards With a For Loop

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}//Iterate Through an Array with a For Loop

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);//Nesting For Loops

const myArray = [];
let i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 11);//Iterate with JavaScript Do...While Loops

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}//Replace Loops using Recursion

function randomFraction() {
    return Math.random();
}//Generate Random Fractions with JavaScript

let number = Math.floor(Math.random() * 10);
function randomWholeNum() {
    return Math.floor(Math.random() * 5);
}//Generate Random Whole Numbers with JavaScript

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}//Generate Random Whole Numbers within a Range

function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");//Use the parseInt Function

function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011");

function checkEqual(a, b) {
    return a !== b ? 'Not Equal' : 'Equal';
}
checkEqual(1, 2);//Use the Conditional (Ternary) Operator

function checkSign(num) {
    return (num > 0) ? 'positive' : (num === 0) ? 'zero' : 'negative';
}
checkSign(10);//Use Multiple Conditional (Ternary) Operators

function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}//Compare Scopes of the var and let Keywords

const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();//Mutate an Array Declared with const

const magic = () => new Date();//Use Arrow Functions to Write Concise Anonymous Functions
