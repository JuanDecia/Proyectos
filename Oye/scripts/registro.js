function validar(formulario) {

    // Validamos el email a traves de una expresión regular //
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        alert("Email inválido");
        return false;
    }

    // Contraseña obligatoria //
    if (formulario.contraseña.value.trim().length == 0) {
        alert("Contraseña Obligatoria");
        return false;
    }

    // Contraseña minimo 8 caracteres //
    if (formulario.contraseña.value.length < 8) {
        alert("Debe ingresar una contraseña mínima de 8 caracteres");
        return false;
    }

    // Validar contraseña //
    if (formulario.contraseña.value != formulario.confirmarContraseña.value) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    // Género obligatorio //
    if (formulario.genero.value == "") {
        alert("Campo Género obligatorio");
        return false;
    }

    // Edad obligatoria //
    if (formulario.edad.value == "") {
        alert("Edad obligatoria");
        return false;
    }

    // Aceptar términos obligatorio //
    if (formulario.terminos.checked) {
        alert("Debe aceptar términos y condiciones");
        return false;
    }
}