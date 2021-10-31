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