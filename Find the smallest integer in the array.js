class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(x,y){
      if(x>y){
        return 1;
      }
      if(x<y){
        return -1;
      }
    })
  return args[0];
  }
}


console.log(findSmallestInt([78,56,232,12,18]))
console.log(findSmallestInt([78,56,232,412,228]))
console.log(findSmallestInt([78,56,232,12,0]))
    