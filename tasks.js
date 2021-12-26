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