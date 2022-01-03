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
