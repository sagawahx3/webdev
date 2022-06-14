function submitForm() {

   var user = document.querySelector("#user");
   var pw = document.querySelector("#pw");
   var email = document.querySelector("#email");

   if (user.value != "" && pw.value != "" && email.value != "") {
       alert('Obrigado ' + user.value + ', seu registro foi concluído com sucesso!');
       
       localStorage.setItem("username",user.value);
       localStorage.setItem("password",pw.value);
       localStorage.setItem("email",email.value);

   } else {
      alert('Existem erros no formulário. Favor tentar novamente.');
   }


}