//variables



function validar() {

    let nombre, apellidos, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    correo = document.getElementById("correo");
    usuario = document.getElementById("usuario");
    clave = document.getElementById("pass");
    telefono = document.getElementById("telefono");


    const pattern = new RegExp('^[A-Z]+$', 'i');




    console.log(nombre.value);
    console.log(apellidos.value);
    console.log(correo);
    console.log(usuario);
    console.log(pass);
    console.log(telefono);

    //validaciones

    if (
        nombre.value === "" ||
        apellidos.value === "" ||
        correo.value === "" ||
        usuario.value === "" ||
        usuario.value === "" ||
        pass.value === "" ||
        telefono.value === ""
    ) {
        alert("todos los campos son obligatorios");
        return false;

    }


    else if (nombre.value.length > 30) {

        alert("el nombre es muy largo");
        return false;
    }
    else if (!pattern.test(nombre.value)) {

        alert("ingrese solo letras para su nombre");
        return false
    }
    else if (apellidos.value.length > 80) {

        alert("los apellidos son muy largos");
        return false;
    }


    else if (!pattern.test(apellidos.value)) {

        alert("ingrese solo letras para su apellido");
        return false
    }

    else if (correo.value.length > 100) {

        alert("correo muy largo");
        return false;
    }

    else if (usuario.value.length > 20) {

        alert("nombre de usuario muy largo");
        return false;

    }

    else if (telefono.value.length > 15) {

        alert("El teléfono es muy largo");
        return false;
    }
    else if (isNaN(telefono.value)) {

        alert("el telefono debe ser solo numeros");
        return false;
    }
    else {

        alert("Bienvenido " + nombre.value + " " + apellidos.value + " Gracias por Registrarte");
    }
}













