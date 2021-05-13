// Evento jQuery al seleccionar el input

var inputForm = $(".form-control");
var iconCarrito = $("#iconoCarrito");

$(document).ready(function(){
    inputForm.focus(function(){
        $(this).css("background-color", "#dbfdff");
    });

    inputForm.blur(function(){
        $(this).css("background-color", "white");
    });
});

// Evento jQuery al colocar el cursor en el icono del carrito

iconCarrito.mouseenter(function(){
    $(this).animate({
        height: "50px",
        width: "50px"
    }, 'slow')
})

iconCarrito.mouseleave(function(){
    $(this).animate({
        height: "30px",
        width: "30px"
    }, 'fast')
})

// VALIDACION AL HACER CLICK EN EL BUTTON TYPE SUBMIT "ENVIAR"

let botonEnviar = document.getElementById('enviarFormulario');
botonEnviar.addEventListener("click", function(){
    let formulario = {
    nombre: document.getElementById('txtNombre').value,
    apellido: document.getElementById('txtApellido').value,
    telefono: document.getElementById('txtTelefono').value,
    correo: document.getElementById('correo').value,
    region: document.getElementById('region').value,
    comuna: document.getElementById('comuna').value,
    mensaje: document.getElementById('mensaje').value
    }
    validarCamposTexto(formulario);
})

// ALERTAS DE VALIDACION

function enviarAlerta(){
    let alertaFormulario = document.getElementById('alertaFormulario');
    alertaFormulario.innerHTML = 
    `<div class="alert alert-success" role="alert">
        ¡Se han ingresado correctamente sus datos!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
}

function enviarAlertaError (campoFormulario) {
    let alertaFormulario = document.getElementById('alertaFormulario');
    alertaFormulario.innerHTML = 
    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        Estimado usuario: debe ingresar informacion correcta en el campo <strong>${campoFormulario}</strong>.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
}

// VALIDACION DE CAMPOS

function validarCamposTexto(formulario){
    if ((formulario.nombre.trim() == null) || (formulario.nombre.trim().length === 0)) {
        enviarAlertaError('nombre');
    } else if ((formulario.apellido.trim() == null) || (formulario.apellido.trim().length === 0)) {
        enviarAlertaError('apellido');
    } else if ((formulario.telefono.trim() == null) || (formulario.telefono.trim().length != 9) || (isNaN(formulario.telefono))) {
        enviarAlertaError('teléfono');
    } else if ((formulario.correo.trim() == null) || (formulario.correo.trim().length === 0)) {
        enviarAlertaError('correo');
    } else if (formulario.region === 'Selecciona') {
        enviarAlertaError('region');
    } else if (formulario.comuna === 'Selecciona') {
        enviarAlertaError('comuna');
    } else if ((formulario.mensaje.trim() == null) || (formulario.mensaje.trim().length === 0)) {
        enviarAlertaError('mensaje');
    } else {
        enviarAlerta();
    }
}

