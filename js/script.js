var btn = document.querySelector(".login-button");
var form = document.querySelector(".login-form");
var state = 0;
var pos = -140;

btn.addEventListener("click", function() {
  console.log(form.style.top);

 myInterval = setInterval(function() {
  //opening window
  if(state == 0){
  if (pos == 40) { 
    state++;
    clearInterval(myInterval); 
   } else {
      pos += 10;
      form.style.top = pos + 'px';
   }
  //closing
  } else {
    if (pos == -140) { 
      state--;
      clearInterval(myInterval); 
     } else {

        pos -= 10;
        form.style.top = pos + 'px';
     }
  }    
      }, 5);
});

