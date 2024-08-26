const prompt = require('prompt-sync')();

// Faca uma condicional que veja a idade da pessoa 
// se ela for maior de 18 anos ele pode entrar na boate
// Se ela for maior de 16 anos ela precisa entrar com os pais OK
// Se ela for menor que 16 anos ela nao pode entrar OK

const nome = prompt("Informe o seu nome... ")
const idade = prompt("Informe a sua idade... ")

if (idade >= 16 && idade < 18){
  console.log("precisa entrar com os pais " + nome)
}
else if (idade <= 16) {
  console.log("nao pode entrar " + nome)  
} else if (idade >= 18) {
  console.log("liberada " + nome) 
}
else {
  console.log("error")
}

// Pos correcao (otimizado)
if (idade >= 18){
  console.log("liberado " + nome)
}else if (idade <= 16) {
  console.log("pode entrar com seus pais  " + nome)  
} else {
  console.log("nao pode entrar " + nome) 
}