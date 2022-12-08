// Capturamos elementos del DOM

let contEvento = document.getElementsByClassName('cont-evento');
let tituloEvento = document.getElementsByClassName('titulo-evento');
let contFecha = document.getElementsByClassName('cont-fecha');
let contLugar = document.getElementsByClassName('cont-lugar');
let contCosto = document.getElementsByClassName('cont-costo');
let contDescripcion = document.getElementsByClassName('cont-descripcion');

//Carga los datos que estan en el JSON (info.json) usando AJAX
function cargarDatos() {
  $.ajax({

    url: 'info.json'

  }).done(function(respuesta){

    // Ordena los eventos
    function organizarEventos(a, b) {
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
    }

    // Guardamos los eventos ordenados
    let eventosOrdenados = respuesta.eventos.sort(organizarEventos);

    // Arreglo para colocar próximos.
    let proximos = [];

    // Los eventos proximos se colocan al arreglo "proximos"
    for (let i = 0; i < eventosOrdenados.length; i++) {

      console.log(respuesta.fechaActual);

      if(eventosOrdenados[i].fecha > respuesta.fechaActual ) {
        proximos.push(eventosOrdenados[i]);
      }

    };

    // Escribimos los proximos en el DOM
    for (let i = 0; i < proximos.length; i++) {
      tituloEvento[i].innerHTML += `<a href="detalle.html?id=${proximos[i].id}" class="p-2">${proximos[i].nombre}</a>`;
      contFecha[i].innerHTML += proximos[i].fecha + " -";
      contLugar[i].innerHTML += proximos[i].lugar;
      contDescripcion[i].innerHTML += proximos[i].descripcion;
      contCosto[i].innerHTML += 'Costo: ' + proximos[i].precio;
    };
    
  });

  
}

$(document).ready(function () {
  
  cargarDatos();

});
