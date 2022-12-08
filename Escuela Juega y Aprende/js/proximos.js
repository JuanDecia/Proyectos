//Define las variables que necesites
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

    //Guarda el resultado en variables
  }).done(function(respuesta){

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    function organizarEventos(a, b) {
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    let eventosOrdenados = respuesta.eventos.sort(organizarEventos);

    // Arreglo para colocar luego los próximos.
    let proximos = [];

    // Los eventos proximos se colocan al arreglo "proximos"
    for (let i = 0; i < eventosOrdenados.length; i++) {

      console.log(respuesta.fechaActual);

      if(eventosOrdenados[i].fecha > respuesta.fechaActual ) {
        proximos.push(eventosOrdenados[i]);
      }

    };

    // Escribimos los proximos en el HTML
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
  
  //Crea un string que contenga el HTML que describe el detalle del evento

  // Escribe DOM
  
  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});
