// Function to change icon of menu hamburger
function changeIconMenu() {
    document.getElementById("active").classList.toggle("icon-change");
}
// funtion to show password of form
const btn = document.querySelector('#eye');
btn.addEventListener('click', function () {
    let passwordIntered = document.querySelector('#password-1');
    let eyeIcon = document.querySelector('#eye');

    if (passwordIntered.getAttribute('type') == 'password-1') {
        passwordIntered.setAttribute('type', 'text');
        eyeIcon.src = "/assets/open-eye.svg";
    } else {
        passwordIntered.setAttribute('type', 'password-1');
        eyeIcon.src = "/assets/close-eye.svg";
    }
});

function validateForm() {
  var password = document.forms["formbox"]["password-1"].value;
  var password2 = document.forms["formbox"]["password-2"].value;
  if (password !== password2) {
    alert("As senhas não conferem");
    return false;
  }
}

function checkedForm (){
  if (document.getElementById("formbox").validateForm() == false) {
    alert("Preencha todos os campos");
    return false;
  }
  document.getElementById("formbox").style.visibility= "hidden";
  document.getElementById("title-section-2").innerHTML = "Cadastro realizado com sucesso!";
  document.getElementById("text-section-2").style.display= "none";
  setTimeout(function() {
    window.location.reload(1);
  }, 5000);
}

/* Máscaras para telefone */
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

function id( el ){
  return document.getElementById( el );
}

window.onload = function(){
  id('telefone').onkeyup = function(){
  mascara( this, mtel );
  }
}
/* FIM - Máscaras para telefone */
