// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']
function alphaSort(letters){
    return letters.sort();   
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']
function strLengthSort(word){
    word.sort(function(a, b){
      return a.length - b.length
    })
    return word
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
// sumSort([
//   [9, 1, 9],
//   [2],
//   [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]

function sumSort(arr){
  var blank = [];
  var blank2 = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for(var i = 0; i < arr.length; i++){
  blank.push(arr[i].reduce(reducer))
  }

 blank.sort((a, b) => a - b);
 for(var j = 0; j < arr.length; j++){
   if(arr[j].reduce(reducer) === blank[0]){
     blank2.push(arr[j]);
   }
 }
 for(var j = 0; j < arr.length; j++){
   if(arr[j].reduce(reducer) === blank[1]){
     blank2.push(arr[j]);
   }
 }
 for(var j = 0; j < arr.length; j++){
   if(arr[j].reduce(reducer) === blank[2]){
     blank2.push(arr[j]);
   }
 }
   
 
 return blank2;
 
 
}
