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
  document.getElementById("formbox").style.visibility= "hidden";
  document.getElementById("title-section-2").innerHTML = "Cadastro realizado com sucesso!";
  document.getElementById("text-section-2").style.display= "none";
  setTimeout(function() {
    window.location.reload(1);
  }, 5000);
  
}

// function verifyPassLength(){
//   var password = document.getElementById("password-1").value;
//   var password2 = document.getElementById("password-2").value;
//   //check empty password field
//   if(password == "" || password2 == "") {
//     alert("Preencha o campo de senha");
//     return false;
//   }
//   //Password minimum length
//   if(password.length < 6 || password2.length < 6) {
//     alert("A senha deve conter no mínimo 6 caracteres");
//     return false;
//   }
//   //Password maximum length
//   if(password.length > 10 || password2.length > 10) {
//     alert("A senha deve conter no máximo 10 caracteres");
//     return false;
//   } else {
//     alert("Success....! Password Verified.");
//   }

//   if (password != password2) {
//     alert("Senhas não conferem");
//     return false;
//   }
// }

