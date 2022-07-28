var anoNasc, anoAtual, idade;
anoAtual = 2022;
var entrada = require('readline-sync');
anoNasc = parseInt(entrada.quetion("ano de nascimento:"));
idade = anoAtual-anoNasc;
console.log(idade);
if(idade>=18){
    console.log("permitido");
}else{
    console.log("negado")
}