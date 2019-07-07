import { stringify } from "querystring";
import { createRequireFromPath } from "module";

// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
// 
// Example:
// reverse("skoob") --> "books"

function reverse(str){
    return str.split("").reverse().join("");

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(str){
    var longestWordArray = [];
    var longest = 0;
    var strSplit = str.split(" ");
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longest){
            longestWordArray.push(strSplit[i].length);
            
        }
    }
   for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length == Math.max(...longestWordArray)){
      return strSplit[i]
      }
   }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer(str){
  
    var blank = [];
    
      strSplit = str.split(" ");
      for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i] !== "heck" && strSplit[i] !== "darn" && strSplit[i] !== "dang" && strSplit[i] !== "crappy" ){
          blank.push(strSplit[i])
        }
      }
        
    
      
   return blank.join(" ");
  
  }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(sentence){
    var cap = (sentence) => sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();

    var capArray = sentence.split(" ").map(cap);
    var firstUpWords = capArray.join(" ");

    return firstUpWords;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

