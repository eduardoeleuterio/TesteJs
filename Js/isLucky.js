const prompt = require('prompt-sync')();

var n = prompt("Is Lucky: ");

function isLucky(n) {
    if(n>9 && n<100001){
        var numbers=n.toString().split("");
    var a=0,b=0;
    for(i=0;i<numbers.length/2;i++){
        a+=parseInt(numbers[i],10);
        b+=parseInt(numbers[numbers.length/2+i],10);
    }
    return a===b;
    }
    else{
        return "fora do escopo";
    }
}
console.log(isLucky(n));