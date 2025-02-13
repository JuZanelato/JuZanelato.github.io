function armazenarValor(){
var userInput = document.getElementById("userInput").value;
var textUser = document.getElementById("textUser").value;
console.log("Prazer," + userInput);
document.getElementById("usu").innerHTML=`Prazer, ${userInput}! Notamos seus interesse citados (${textUser}), são convincentes para nossas equipe, seja muito bem vinda!!`;
}