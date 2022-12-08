// Captura de los elementos del DOM

let contEvento = document.getElementsByClassName('cont-evento');
let tituloEvento = document.getElementsByClassName('titulo-evento');
let contFecha = document.getElementsByClassName('cont-fecha');
let contLugar = document.getElementsByClassName('cont-lugar');
let contCosto = document.getElementsByClassName('cont-costo');
let contDescripcion = document.getElementsByClassName('cont-descripcion');

function cargarDatos() {

  $.ajax({

    url: 'info.json'

  }).done(function (respuesta) {

    let pasados = [];

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    function organizarEventos(a, b) {
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
    }

    // Guardamos los elementos ordenados
    let eventosOrdenados = respuesta.eventos.sort(organizarEventos);

    // Los eventos pasados se colocan al arreglo "pasados"
    for (let i = 0; i < eventosOrdenados.length; i++) {

      console.log(respuesta.fechaActual);

      if(eventosOrdenados[i].fecha < respuesta.fechaActual ) {
        pasados.push(eventosOrdenados[i]);
      }

    };

    console.log(pasados);

    // Escribimos los proximos en el DOM
    for (let i = 0; i < pasados.length; i++) {
      tituloEvento[i].innerHTML += `<a href="detalle.html?id=${pasados[i].id}" class="p-2">${pasados[i].nombre}</a>`;
      contFecha[i].innerHTML += pasados[i].fecha + " -";
      contLugar[i].innerHTML += pasados[i].lugar;
      contDescripcion[i].innerHTML += pasados[i].descripcion;
      contCosto[i].innerHTML += 'Invitados: ' + pasados[i].precio;
    };

  })
}

$(document).ready(function () {

  cargarDatos();

});
