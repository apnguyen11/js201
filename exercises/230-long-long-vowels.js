// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longLongVowels(word){
  var newArray = word.split(""); 
   for(var i = 0; i < newArray.length; i++){
       if(newArray[i] == "a" || newArray[i] == "e" || newArray[i] == "i" || newArray[i] == "o" || newArray[i] == "u"){
         if(newArray[i] == newArray[i + 1]){      
           newArray.splice(newArray.indexOf(newArray[i]), 0, newArray[i], newArray[i], newArray[i])
           return newArray.join("");
         } else {
           return word; 
       } 
      }
   } if(word == undefined || word == ''){
     return ''
   } else {
     return word
   }
  }
