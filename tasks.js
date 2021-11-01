function greet(name){
    return `Hello, ${name} how are you doing today?`
  }
  console.log(greet('Alex'));
  

  function makeNegative(num) {
    if(num === 0 || num < 0){
      return num;
      }else{
        return -num
      }
    }
  console.log(makeNegative(1));
  console.log(makeNegative(-5));
  console.log(makeNegative(0));
  console.log(makeNegative(0.12));
  

  function boolToWord(bool){
    if (bool===true) {
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
    if(n%2===0){
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
    let sum = arr.reduce(function(sum, elem){
      return sum += elem;                     
    })
  return sum;
  }
  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))//21
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))//-21

  
  
  function even_or_odd(number) {
    if(number%2===0){
      return 'Even';
    }else{
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


  function stringToArray(string){
	return string.split(' ');
}
console.log(stringToArray('Hi world'));


function updateLight(current) {
    if (current === "green"){
      return "yellow";
    }
     if (current === "yellow"){
      return "red";
    }
     if (current === "red"){
      return "green";
    }
   }
   console.log(updateLight('green'));
   console.log(updateLight('yellow'));
   console.log(updateLight('red'));


   function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }
  console.log(reverseWords('hello world!'));