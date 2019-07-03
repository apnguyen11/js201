// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function cipher(str, shift){
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var lower = str.toLowerCase();
    var stringSplit = lower.split('');
    var blank = [];
    var indexes = [];
    
    for(var i = 0; i < stringSplit.length; i++){
     
        for(var x = 0; x < alphabet.length; x++){
            
            var Num = [x + shift] 
            if(stringSplit[i] == alphabet[x] ){   
              
              if(Num > 25){
                var newNum = Num - 26;
                
                blank.push(alphabet[newNum]);
              } else {
                blank.push(alphabet[Num]); 

              }          
              
            } 
        } if(stringSplit[i] === " "){
              blank.push(" ")
      }
      if (stringSplit[i] === "-"){
        blank.push("-")
      }
      if(stringSplit[i] === "."){
          blank.push(".");
      }
    }
    return blank.join('');
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher(str, shift){
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var lower = str.toLowerCase();
    var stringSplit = lower.split('');
    var blank = [];
    var indexes = [];
    
    for(var i = 0; i < stringSplit.length; i++){
     
        for(var x = 0; x < alphabet.length; x++){
            
            var Num = [x - shift] 
            if(stringSplit[i] == alphabet[x] ){   
              
              if(Num < 0){
                var positive = Math.abs(Num);
                var newNum = 26 - positive;
                

                 
                blank.push(alphabet[newNum]);
              } else {
                blank.push(alphabet[Num]); 
              }          
            } 
        } if(stringSplit[i] === " "){
              blank.push(" ")
      }
      if (stringSplit[i] === "-"){
        blank.push("-")
      }
      if(stringSplit[i] === "!"){
        blank.push("!")
      }
      if(stringSplit[i] === "."){
        blank.push(".");
    }
    }
   
    var splitTwo = str.split('')
      if(splitTwo[0] === splitTwo[0].toUpperCase()){
        blank[0] = blank[0].toUpperCase();
      }
    
    return blank.join('');
    }
