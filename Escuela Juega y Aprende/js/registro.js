// Validación de los campos del formulario

function validar(formulario) {

  if (formulario.nombres.value.trim().length == 0) {
    document.querySelector('#errorNombres').innerHTML += `Campo obligatorio.`;
    return false;
  }

  //Expresion regular del correo
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(formulario.email.value)) {
    document.querySelector('#errorEmail').innerHTML += `Contraseña obligatoria.`;
    return false;
  }

  // Confirmación de contraseña
  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.querySelector('#errorConfirmacion').innerHTML += `Las contraseñas no coinciden.`;
    return false;
  }

  // Tipo de usuario
  if (formulario.tipo.value == "") {
    document.querySelector('#errorTipo').innerHTML += `Tipo obligatorio.`;
    return false;
  }

  // Validar Terminos y Condiciones
  if (formulario.acepto.checked) {
    document.querySelector("#errorAcepto").innerHTML += `Debe aceptar términos y condiciones.`;
    return false;
  }

  return true;
}
