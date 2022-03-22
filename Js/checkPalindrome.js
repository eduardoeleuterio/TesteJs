const prompt = require('prompt-sync')();

var inputString = prompt("Insira uma palavra ");
var tamanho = inputString.length
function checkPalindrome (inputString) {
    var tm = inputString.length
    if(inputString == inputString.split('').reverse().join('')&& 0<tm && tm<11){
        console.log(tm);
        return true;
    }
    else{
        return false;
    }
   
}

  console.log(checkPalindrome (inputString));