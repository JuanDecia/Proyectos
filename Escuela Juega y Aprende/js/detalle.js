// Hemos omitido los acentos en los comentarios por compatibilidad

let nombreEvento = document.querySelector(".nombre-evento");
let fechaLugar = document.querySelector(".cont-fecha-lugar");
let contFecha = document.querySelector('.cont-fecha');
let contLugar = document.querySelector('.cont-lugar');
let contDescripcion = document.querySelector('.cont-descripcion');
let contCosto = document.querySelector('.cont-costo');
let contInvitados = document.querySelector('.cont-invitados');

// Función para cargar el Json a través de Ajax
function cargarDatos() {

  $.ajax({

    url: 'info.json'

  }).done(function(respuesta) {

    const eventos = respuesta.eventos;

    let id = location.search.match(/id=(\d)*/)[1];

    // Empareja el Id del Json con el id de la url
    evento = eventos.find(function (element) {
      return element.id == id
    });

    // Escribimos Dom
    nombreEvento.innerHTML += `${evento.nombre}`;
    contFecha.innerHTML += `${evento.fecha}`;
    contLugar.innerHTML += `${evento.lugar}`;
    contDescripcion.innerHTML += `${evento.descripcion}`;
    contCosto.innerHTML += `Costo: ${evento.precio}`;
    contInvitados.innerHTML += `Invitados: ${evento.invitados}`;

  })
}

$(document).ready(function () {

  cargarDatos();

});
