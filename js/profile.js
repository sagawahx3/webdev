var login = localStorage.getItem("login");

if(login != null) {
let storedUser = localStorage.getItem("username");
let storedEmail = localStorage.getItem("email");

var maintext = document.querySelector("#maintext");
maintext.innerText = 'Bem-vindo,' + storedUser +'.';

var para = document.createElement("p");
para.innerHTML = "Usuário : " + storedUser +" ";
var addInfo = document.querySelector("#info");
addInfo.appendChild(para);

var para2 = document.createElement("p");
para2.innerHTML = "E-mail : " + storedEmail +" ";
addInfo.appendChild(para2);

var but = document.createElement("button");
but.innerHTML = "Logout";
addInfo.appendChild(but);
}

but.addEventListener("click", function() {
addInfo.removeChild(para);
addInfo.removeChild(para2);
addInfo.removeChild(but);
localStorage.clear();
var maintext = document.querySelector("#maintext");
maintext.innerText = 'Logout realizado.';
});

