function greet(name) {
  return `Hello, ${name} how are you doing today?`
}
console.log(greet('Alex'));


function makeNegative(num) {
  if (num === 0 || num < 0) {
    return num;
  } else {
    return -num
  }
}
console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));


function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
}
console.log(boolToWord(true));
console.log(boolToWord(false));

function opposite(number) {
  return -number;
}
console.log(opposite(15));
console.log(opposite(-5));
console.log(opposite(17));

function numberToString(num) {
  return num + '';
}
console.log(numberToString(17));

function testEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));


function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let sum = arr.reduce(function (sum, elem) {
    return sum += elem;
  })
  return sum;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))//21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))//-21



function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
console.log(even_or_odd(1));
console.log(even_or_odd(6));
console.log(even_or_odd(-71));



function findSmallestInt(args) {
  return Math.min.apply(null, args);
}
console.log(findSmallestInt([-1, -17, -53]));
console.log(findSmallestInt([5, -17, 11]));


function stringToArray(string) {
  return string.split(' ');
}
console.log(stringToArray('Hi world'));


function updateLight(current) {
  if (current === "green") {
    return "yellow";
  }
  if (current === "yellow") {
    return "red";
  }
  if (current === "red") {
    return "green";
  }
}
console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));


function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('hello world!'));


function diffBig2(arr) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= first) {
      first = arr[i];
    }
  }
  arr.splice(arr.indexOf(first), 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= second) {
      second = arr[i];
    }
  }
  return first - second;
}

console.log(diffBig2([1, 8, 3]))//5
console.log(diffBig2([2, 1]))//1
console.log(diffBig2([1, 3, 8]))//5
console.log(diffBig2([10, -1, 5]))//5



function getEvenNumbers(numbersArray) {
  let arr = numbersArray.filter(function (elem) {
    if (elem % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
  return arr;
}
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]))
console.log(getEvenNumbers([1, 2]))
console.log(getEvenNumbers([12, 14, 15]))
console.log(getEvenNumbers([13, 15]))


function highAndLow(numbers) {
  let newArr = [];
  let arr = numbers.split(' ');
  arr.map(function (elem) {
    return Number(elem)
  })
  newArr.push(Math.max.apply(null, arr), Math.min.apply(null, arr))
  return newArr.join(' ')
}
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))


function solution(str) {
  let word = str.split('').reverse().join('');
  return word;
}
console.log(solution('hello'));



function removeChar(str) {
  let word = str.split('');
  word.pop();
  word.shift();
  return word.join('');
}
console.log(removeChar('hello'));


function fixTheMeerkat(arr) {
  arr.reverse();
  return arr;
}
console.log(fixTheMeerkat(["bottom", "middle", "top"]));


function getAverage(marks) {
  let mark = marks.reduce(function (sum, elem) {
    return sum += elem;
  })
  return Math.floor(mark / marks.length);
}
console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5,]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));



function min(arr) {
  arr.sort(function (x, y) {
    if (x > y) {
      return 1
    } else {
      return -1
    }
  })
  return arr[0]
}

function max(arr) {
  arr.sort(function (x, y) {
    if (x < y) {
      return 1
    } else {
      return -1
    }
  })
  return arr[0]
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);



function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  else if (exam > 75 && projects >= 5) {
    return 90
  }
  else if (exam > 50 && projects >= 2) {
    return 75
  }
  else {
    return 0
  }
}
console.log(finalGrade(85, 6))
console.log(finalGrade(35, 3))

function paperwork(n, m) {
  if (n <= 0 || m <= 0) {
    return 0;
  }
  else {
    return n * m;
  }
}
console.log(paperwork(5, 5))
console.log(paperwork(-5, 5))
console.log(paperwork(-5, -5))

function doubleEveryOther(a) {
  for (let i = 1; i < a.length; i += 2) {
    a[i] = a[i] * 2
  }
  return a;
}
console.log(doubleEveryOther([1, 2, 3, 4]))

var stringToNumber = function (str) {
  return Number(str)
}
console.log(stringToNumber('-5'))

function correct(string) {
  let arr = string.split('')
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] === '5') {
      arr[i] = 'S'
    }
    else if (arr[i] === '0') {
      arr[i] = 'O'
      console.log('1')
    }
    else if (arr[i] === '1') {
      arr[i] = 'I'
    }
  }
  return arr.join('')
}
console.log(correct(("L0ND0N")))
console.log(correct(("DUBL1N")))
console.log(correct(("BUDAPE5T")))

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  }
  else {
    return number * 9;
  }
}
console.log(simpleMultiplication(2))
console.log(simpleMultiplication(3))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(4))

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isDivisible(3, 3, 4))
console.log(isDivisible(12, 3, 4))
console.log(isDivisible(8, 3, 4))

function hero(bullets, dragons) {
  if (bullets / dragons >= 2) {
    return true;
  } else {
    return false;
  }
}
console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));


function squareSum(numbers) {
  let arr = numbers.map(function (elem) {
    return elem ** 2;
  })
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));


function remainderr(a, b) {
  let arr = [a, b];
  arr.sort(function (x, y) {
    if (x > y) {
      return -1;
    }
    if (x < y) {
      return 1;
    }
  })
  let rest = arr[0] % arr[1]
  if (arr[1] === 0) {
    return NaN;
  } else {
    return rest;
  }
}
console.log(remainderr(17, 5));
console.log(remainderr(1, 0));

function abbrevName(name) {
  let arr = name.split(' ');
  return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase();
}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));

function makeUpperCase(str) {
  str.split('');
  let newStr = str.toUpperCase();
  return newStr;
}
console.log(makeUpperCase("hello"));

function ensureQuestion(s) {
  let arr = s.split('');
  if (s[s.length - 1] !== '?') {
    arr.push('?')
  }
  return arr.join('')
}
console.log(ensureQuestion("Yes"));

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
console.log(greet("Jim"));
console.log(greet("Johnny"));

function repeatStr(n, s) {
  return s.repeat(n)
}
console.log(repeatStr(3, "*"));

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false
  }
}
console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));

function cockroachSpeed(s) {
  return parseInt(s * (100000 / (60 * 60)))
}
console.log(cockroachSpeed(1.08));

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld)
}
console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return (l + w) * 2
  }
};
console.log(areaOrPerimeter(4, 4));
console.log(areaOrPerimeter(6, 10));

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
console.log(goals(0, 0, 0));
console.log(goals(43, 10, 5));

function doubleInteger(i) {
  return i * 2;
}
console.log(doubleInteger(2));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

function addFive(num) {
  var total = num + 5
  return total;
}

function move(position, roll) {
  return position + roll * 2;
}
console.log(move(3, 6));

function evenNumbers(array, number) {
  let arr = array.filter(function (elem) {
    if (elem % 2 === 0) {
      return true;
    }
  })
  return arr.slice(-number);
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));

function missingNo(nums) {
  let newArr = []
  let arr = nums.sort(function (x, y) {
    if (x < y) {
      return -1;
    }
  })
  arr.filter(function (elem, index) {
    if (index === elem) {
      newArr.push(elem)
    }
  })
  return newArr[newArr.length - 1] + 1
}
console.log(missingNo([9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]))

function litres(time) {
  return Math.trunc(time * 0.5)
}
console.log(litres(2));
console.log(litres(1.4));

const square = (arg) => arg ** 2;
console.log(square(3));

var summation = function (num) {
  return (num * (num + 1)) / 2;
}
console.log(summation(8))

function findLongest(str) {
  let num = 0;
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      num = arr[i].length;
    }
  }
  return num;
}
console.log(findLongest("The quick white fox jumped around the massive dog"));
console.log(findLongest("Sausage chops"));

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}
console.log(between(1, 4));
console.log(between(-2, 2));

function pipeFix(numbers) {
  let first = [];
  let second = [];
  let arr = [];
  let newArr = [];
  numbers.sort(function (x, y) {
    if (x > y) {
      return 1;
    }
  });
  first = numbers[0];
  second = numbers[numbers.length - 1]
  arr = [first, second];
  for (let i = first; i <= second; i++) {
    newArr.push(i);
  }
  return newArr;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));

function find_average(array) {
  let sum = array.reduce(function (sum, elem) {
    return sum += elem;
  });
  return sum / array.length;
}
console.log(find_average([1, 1, 1]));
console.log(find_average([1, 2, 3]));
console.log(find_average([1, 2, 3, 4]));

function find_average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum === 0) {
    return 0;
  } else {
    return sum / array.length;
  }
}
console.log(find_average([1, 1, 1]));
console.log(find_average([1, 2, 3]));
console.log(find_average([1, 2, 3, 4]));

function findOdd(array) {
  let count = 0;
  let arr = array.sort(function (x, y) {
    if (x > y) {
      return 1;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));

function isPalindrome(x) {
  let str = x.split('').reverse().join('').toUpperCase();
  if (str === x.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));

function peopleWithAgeDrink(old) {
  if (old >= 21) {
    return "drink whisky";
  } else if (old >= 18) {
    return "drink beer";
  } else if (old >= 14) {
    return "drink coke";
  }
  return "drink toddy";
}
console.log(peopleWithAgeDrink(22));

function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  }
}
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

function digitize(n) {
  let arr = n.toString().split('').reverse()
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(+arr[i]);
  }
  return newArr;
}
console.log(digitize(35231));
console.log(digitize(0));

function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
  } else {
    return (on + wait) - cap;
  }
}
console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));

function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((sum, elem) => sum += elem);
  if (yourPoints > sum / classPoints.length) {
    return true;
  } else {
    return false;
  }
}
console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

const quarterOf = (month) => {
  if (month === 1 || month === 2 || month === 3) {
    return 1;
  }
  if (month === 4 || month === 5 || month === 6) {
    return 2;
  }
  if (month === 7 || month === 8 || month === 9) {
    return 3;
  }
  if (month === 10 || month === 11 || month === 12) {
    return 4;
  }
}
console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))

function combineNames(a, b) {
  return a + ' ' + b;
}
console.log(combineNames('James', 'Stevens'));

function distinct(a) {
  let set = new Set(a);
  return Array.from(set);
}
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));

function hamming(a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      count++;
    }
  }
  return count;
}
console.log(hamming("I like turtles", "I like turkeys"));
console.log(hamming("Hello World", "Hello World"));

function arraysSimilar(arr1, arr2) {
  return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}
const arr1 = [1, 2, 2, 3, 4],
  arr2 = [2, 1, 2, 4, 3],
  arr3 = [1, 2, 3, 4],
  arr4 = [1, 2, 3, "4"]
console.log(arraysSimilar(arr1, arr2)); // Should equal true
console.log(arraysSimilar(arr2, arr3)); // Should equal false
console.log(arraysSimilar(arr3, arr4)); // Should equal false

function smash(words) {
  return words.join(' ');
};
console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));

function checkForFactor(base, factor) {
  return base % factor === 0;
}
console.log(checkForFactor(63, 7));
console.log(checkForFactor(2450, 5));
console.log(checkForFactor(24612, 3));

function getGrade(s1, s2, s3) {
  let sum = (s1 + s2 + s3) / 3;
  if (sum <= 100 && sum >= 90) {
    return 'A';
  } else if (sum < 90 && sum >= 80) {
    return 'B';
  } else if (sum < 80 && sum >= 70) {
    return 'C';
  } else if (sum < 70 && sum >= 60) {
    return 'D';
  } else if (sum < 60 && sum >= 0) {
    return 'F';
  }
}
console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 70));
console.log(getGrade(48, 55, 52));

function booleanToString(b) {
  return b.toString();
}
console.log(booleanToString(true));
console.log(booleanToString(false));

function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n >= 13) {
    return n - 2;
  } else {
    return n - 1;
  }
}
console.log(getRealFloor(5));
console.log(getRealFloor(15));

function howMuchILoveYou(nbPetals) {
  let arr = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];
  return arr[nbPetals % 6];
}
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));

function getAge(inputString) {
  return +inputString[0];
}
console.log(getAge("4 years old"));

function century(year) {
  return Math.floor(year / 100) + 1;
}
console.log(century(2000));
console.log(century(89));

function otherAngle(a, b) {
  return 180 - (a + b);
}
console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
console.log(otherAngle(43, 78));
console.log(otherAngle(10, 20));

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
console.log(Kata.getVolumeOfCuboid(1, 2, 2));
console.log(Kata.getVolumeOfCuboid(6.3, 2, 5));

function nthEven(n) {
  return n * 2 - 2;
}
console.log(nthEven(1));
console.log(nthEven(2));
console.log(nthEven(3));

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
console.log(past(0, 1, 1))
console.log(past(1, 1, 1))
console.log(past(0, 0, 0))

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
}
console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(item => !geese.includes(item));
};
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

function sixToast(num) {
  return Math.abs(num - 6);
}
console.log(sixToast(6), 0);
console.log(sixToast(17), 11);
console.log(sixToast(3), 3);

function sumStr(a, b) {
  if (a == 0 && b == 0) {
    return '0';
  }
  return (Number(a) + Number(b)).toString();
}
console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));

function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  }
  return "Keep at it until you get it";
}
console.log(hoopCount(2));
console.log(hoopCount(11));

function findDifference(a, b) {
  let sum = a.reduce((acc, elem) => acc *= elem);
  let sum1 = b.reduce((acc, elem) => acc *= elem);
  return Math.abs(sum - sum1);
}
console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
  if (zeroFuel > 1) {
    return true
  } else {
    return false
  }
};
console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

function doubleChar(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }
  return res;
}
console.log(doubleChar("1337"));
console.log(doubleChar("illuminati"));
console.log(doubleChar("123456"));

function greet(name) {
  return 'Hello, ' + name + ' how are you doing today?';
}
console.log(greet("Ryan"));
console.log(greet("Shingles"));

const reverseSeq = n => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reverse()
};
console.log(reverseSeq(5));

function check(a, x) {
  return a.includes(x);
}
console.log(check([66, 101], 101));
console.log(check([101, 45, 75, 105, 99, 107], 98));

function reverseList(list) {
  return list.reverse();
}
console.log(reverseList([1, 2, 3, 4]));
console.log(reverseList([3, 1, 5, 4]));

function invert(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array[i] = array[i] * 1;
    }
    array[i] = array[i] * -1;
  }
  return array;
}
console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));

function twoHighest(arr) {
  let set = Array.from(new Set(arr));
  set.sort((a, b) => b - a);
  if (set.length === 1) {
    return [set[0]];
  } else if (set.length === 0) {
    return [];
  } else {
    return [set[0], set[1]];
  }
}
console.log(twoHighest([]));
console.log(twoHighest([15]));
console.log(twoHighest([15, 20, 20, 17]));

function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === 'r') {
    return name + ' plays banjo';
  }
  return name + ' does not play banjo';
}
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));

function maps(x) {
  return x.map(elem => elem * 2);
}
console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
console.log(maps([2, 2, 2, 2, 2, 2]));