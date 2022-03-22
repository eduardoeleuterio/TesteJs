const prompt = require('prompt-sync')();

var param1 = prompt("Primeiro numero: ");
var param2 = prompt("Segundo numero: ");

function add(param1,param2){

    result = parseInt(param1)+parseInt(param2);

    return result;
}

console.log("Resultado: "+add(param1,param2));