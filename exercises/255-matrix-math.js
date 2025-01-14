// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

function matrixAdd(arr1, arr2){
    var blank1 = [];
    var blank2 = [];
    var blankFinal = [];
    blank1.push(arr1[0][0] + arr2[0][0])
    blank1.push(arr1[0][1] + arr2[0][1])
    blank2.push(arr1[1][0] + arr2[1][0])
    blank2.push(arr1[1][1] + arr2[1][1])
    blankFinal.push(blank1, blank2)
    return blankFinal;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function matrixMultiply(arr1, arr2){
    var blank1 = [];
    var blank2 = [];
    var blankFinal = [];
    blank1.push(arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0]);
    blank1.push(arr1[0][0] * arr2[0][1] + arr1[0][1] * arr2[1][1]);
    blank2.push(arr1[1][0] * arr2[0][0] + arr1[1][1] * arr2[1][0]);
    blank2.push(arr1[1][0] * arr2[0][1] + arr1[1][1] * arr2[1][1])
    blankFinal.push(blank1, blank2)
    return blankFinal;
    
   
    
}