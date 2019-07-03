// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

function leetspeak(word){
  const check = {
      A: 4,
      E: 3,
      G: 6,
      I: 1,
      O: 0,
      S: 5,
      T: 7
  }
  var wordSplit = word.toUpperCase().split('');
  for(var i = 0; i < word.length; i++){
    for (var x = 0; x < Object.keys(check).length; x++) { 
      var keys = Object.keys(check)
      if(wordSplit[i] == keys[x]){
      wordSplit[i] = check[wordSplit[i]];
            }
    }      
}
var complete = wordSplit.join('');
return complete.toLowerCase();

}


