// Hemos omitido los acentos en los comentarios por compatibilidad

let nombreEvento = document.querySelector(".nombre-evento");
let fechaLugar = document.querySelector(".cont-fecha-lugar");
let contFecha = document.querySelector('.cont-fecha');
let contLugar = document.querySelector('.cont-lugar');
let contDescripcion = document.querySelector('.cont-descripcion');
let contCosto = document.querySelector('.cont-costo');
let contInvitados = document.querySelector('.cont-invitados');

function cargarDatos() {

  $.ajax({

    url: 'info.json'

  }).done(function(respuesta) {

    const eventos = respuesta.eventos;
    const contenedor = document.getElementById('evento');

    let id = location.search.match(/id=(\d)*/)[1];

    evento = eventos.find(function (element) {
      return element.id == id
    });

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

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en una variable

  //Busca el elemento en el arreglo

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});
