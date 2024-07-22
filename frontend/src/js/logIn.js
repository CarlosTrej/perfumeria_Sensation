let form = document.getElementById("formLogin");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value.length <= 8) {
    handleInvalidInput(email, "Tu correo necesita al menos 8 caracteres para ser válido");
  } else if (email.value.length >= 40) {
    handleInvalidInput(email, "Tu correo excede el máximo de 40 caracteres para ser válido");
  } else if (email.value.length === 0) {
    alertModal("El campo correo electrónico no puede quedar vacío");
  } else {
    if (password.value.length < 8) {
      handleInvalidInput(password, "Necesitas al menos 8 caracteres en tu contraseña.");
    } else {
      try {
        let response = await fetch('http://localhost:3000/api/v1/users/login', {
          method: 'POST',
          body: JSON.stringify({
            "correo": email.value,
            "password": password.value
          }),
          headers: {
            'Content-type': 'application/json',
          }
        });

        if (response.status === 500 || response.status === 401) {
          console.log("Respuesta HTTP " + response.status);
          alertModal("Login inválido. Por favor, verifica tus credenciales.");
          clearInputs(email, password);
        } else {
          console.log("Respuesta HTTP " + response.status);
          let data = await response.json();

          sessionStorage.setItem('sesion', data.token);

          if (data.isAdmin === true) {
            sessionStorage.setItem('adminSesion', '1');
          }

          validTrue();
          clearInputs(email, password);

          setTimeout(function () {
            location.href = `./../index.html`;
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
});

function handleInvalidInput(element, message) {
  element.classList.add("is-invalid");
  alertModal(message);
  element.value = "";
}

function alertModal(text){
    Swal.fire({
        title: 'Alerta',
        text: `¡${text}!`,
        icon: 'warning',
        cancelButtonColor: '#d33',
        cancelButtonText: "Okay"
      })
}/*  alertModal */

function validTrue(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inicio de sesión valido.',
        showConfirmButton: false,
        timer: 1500
      })
      clearInputs(email,password);
}/*  validTrue */


function clearInputs(email,password){
    email.value = "";
    password.value = "";
    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");
}/* clearInputs */