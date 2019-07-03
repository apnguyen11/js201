// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(num) {
    var star = "*";
    var empty = '';
    var myStr = '';
    for(var i = 0; i < num; i++){
        empty += star; 
    }
   for(var x = 0; x < num; x++){
     myStr += empty + '\n'
   }

  var splitArray = myStr.split('');
  splitArray.pop();
  myStr = splitArray.join('');
  

   if(num === '' || num === 0){
       return '';
   } else if(num ===1){
       return '*'
   } else {
       return myStr;
   }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(width, height) {
    var minus = width - 1
    var star = "*";
    var empty = '';
    var empty2= empty.split('');
    var blank = []
    var myStr = '';
    var height2 = height - 3
    
   for(var x = 0; x < width; x++){
    myStr += star;
   }
 
  
  var splitArray = myStr.split('');
  var spliced = splitArray.splice(1, 2);
  for(var j = 2; j < width;  j++){
    spliced.splice(1, 0, " ")
    
  }
  var joinedSpace = spliced.join('');

  var finalEmpty = '';
  for(var z = 0; z <= width; z++){
    if( z == 0 || z == width){
      finalEmpty += myStr + '\n';
    } else if (height == 1){
      return myStr
    }  else if(height == 1 && width == 1){
      return '*'
    }
    if(height > 2 && z <= height2){
      finalEmpty += joinedSpace + '\n';
      } else if(height == 1 && width == 1){
      return '*'
    } 
  }
    
  var splitArray = finalEmpty.split('');
  splitArray.pop();
  finalEmpty = splitArray.join('');
 
   if(width === '' || width === 0){
       return '';
   }  else{
       return finalEmpty
   }
  
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner() {

}