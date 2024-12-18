function hasTargetSum(array, target) {
  // Write your algorithm here
 
  for (let i=0; i<array.length; i++){
    for (let g=i+1; g<array.length; g++){
      if (array[i] + array[g] === target){
        return true;
      }
    }
  }
  return false;
}
console.log("This my example 1:", hasTargetSum([4, 3, 7, 9], 8));
console.log("This my example 2:", hasTargetSum([20, 23, 13, 56], 43));
console.log("This my example 3:", hasTargetSum([1, 3, 7, 9, 11, 15, 17], 8));
console.log("This my example 4:", hasTargetSum([4, 7, 4, 6, 12], 18));
console.log("This my example 5:", hasTargetSum([4, 2, -1, 7, 9], 8));
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  first i go through every element of my array
  then i go through the pair from every element i select above , i check the next number in that array
  the aim is if two num added in this array give us same value as target it return true, else it return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
