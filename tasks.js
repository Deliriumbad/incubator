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