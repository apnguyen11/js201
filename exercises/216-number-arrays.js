// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max(arr){
    var max = 0
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > max){
          max = arr[i];
      }
    }
    return max;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(arr){
    sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []

function positives(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArray.push(arr[i]);

        }
    }
return newArray;
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens(arr){
    var newArray = [];
  
    for(var i = 0; i < arr.length; i++){
    
        if (Number.isInteger(arr[i]) && arr[i]%2 === 0){
         
             newArray.push(arr[i]); 
         
           
         
         } 
     }
     return newArray;
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){


        if(Number.isInteger(arr[i]) && arr[i]%2=== 1 || arr[i]%2=== -1){
        newArray.push(arr[i]);
        }
    }
    return newArray
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers(arr){
    var newArray = [];
    
        for(var i = 0; i < arr.length; i++){
            if(Number.isInteger(arr[i])){
    
                newArray.push(arr[i]);
    
            }
    
            
    
    }
    return newArray;
    }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

function squareDance(arr){

    var blank = [];
    for(var i = 0; i < arr.length; i++){
        blank.push(arr[i] * arr[i]);
    }
    return blank
}