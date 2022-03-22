const prompt = require('prompt-sync')();

var year = prompt("Insira o ano: ");

function centuryFromYear(year) {
   if(0<year && 2005>year){
        return Math.floor((year-1)/100) + 1;  
     }
    else{
        return ("fora do escopo")
    }

}

console.log(centuryFromYear(year));