const prompt = require('prompt-sync')();
/**
 * = eh usado para atribuir um valor
 * == significa igual
 * != significa diferente
 * > significa maior que
 * < significa menor que
 * >= significa maior ou igual
 * <= significa menor ou igual
 */

const nome = prompt("Informe o seu nome... ")
const nota = prompt("Informe a sua nota... ")
// condiciona if serve para voce fazer alguma acao caso o valor da condicional seja verdadeiro
if (nota >= 7){
  console.log("Voce foi aprovado " + nome)
}
// caso o if seja falso e o else if for verdadeiro ele fara a acao do else if
else if (nota >= 5){
  console.log("Voce esta de recuperacao " + nome)
}
// caso if e todos os else if forem falsos ele ira executar a acao do else
else { 
  console.log("Voce foi reprovado " + nome)
}
