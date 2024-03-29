// Petición Http
let peticion = new XMLHttpRequest();
peticion.open('GET', 'info.json');
peticion.send();

// Capturamos elementos del DOM

const primerEvento = document.querySelector('.primer-evento');
const primerFecha = document.querySelector('.primer-fecha');
const primerLugar = document.querySelector('.primer-lugar');

const segundoEvento = document.querySelector('.segundo-evento');
const segundaFecha = document.querySelector('.segunda-fecha');
const segundoLugar = document.querySelector('.segundo-lugar');

const primerEventoPasado = document.querySelector('.primer-evento-pasado');
const primerFechaPasada = document.querySelector('.primer-fecha-pasada');
const primerLugarPasado = document.querySelector('.primer-lugar-pasado');

const segundoEventoPasado = document.querySelector('.segundo-evento-pasado');
const segundaFechaPasada = document.querySelector('.segunda-fecha-pasada');
const segundoLugarPasado = document.querySelector('.segundo-lugar-pasado');

peticion.onload = () => {

  if (peticion.status == 200) {

    let respuesta = JSON.parse(peticion.response);


    // Ordena eventos.
    function organizarEventos(a, b) {
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
    }

    // eventos ordenados guardados
    let eventosOrdenados = respuesta.eventos.sort(organizarEventos);

    // Arreglos para colocar proximos y pasados.
    let proximos = [];
    let pasados = [];

    // Los eventos proximos se colocan al arreglo "proximos"
    for (let i = 0; i < eventosOrdenados.length; i++) {

      console.log(respuesta.fechaActual);

      if(eventosOrdenados[i].fecha > respuesta.fechaActual ) {
        proximos.push(eventosOrdenados[i]);
      }

    };

    // Los eventos pasados se colocan al arreglo "pasados"
    for (let i = 0; i < eventosOrdenados.length; i++) {

      console.log(respuesta.fechaActual);

      if(eventosOrdenados[i].fecha < respuesta.fechaActual ) {
        pasados.push(eventosOrdenados[i]);
      }

    };

    // Escribimos el primer proximo evento
    primerEvento.innerHTML += `<a href="detalle.html?id=${proximos[0].id}" class="p-2">${proximos[0].nombre}</a>`;
    primerFecha.innerHTML += proximos[0].fecha;
    primerLugar.innerHTML += proximos[0].lugar;

    // Escribimos el primer pasado evento
    primerEventoPasado.innerHTML += `<a href="detalle.html?id=${pasados[0].id}" class="p-2">${pasados[0].nombre}</a>`;
    primerFechaPasada.innerHTML += pasados[0].fecha;
    primerLugarPasado.innerHTML += pasados[0].lugar;

    // Escribimos el segundo proximo evento
    segundoEvento.innerHTML += `<a href="detalle.html?id=${proximos[1].id}" class="p-2">${proximos[1].nombre}</a>`;
    segundaFecha.innerHTML += proximos[1].fecha;
    segundoLugar.innerHTML += proximos[1].lugar;

    // Escribimos el segundo pasado evento
    segundoEventoPasado.innerHTML += `<a href="detalle.html?id=${pasados[1].id}" class="p-2">${pasados[1].nombre}</a>`;
    segundaFechaPasada.innerHTML += pasados[1].fecha;
    segundoLugarPasado.innerHTML += pasados[1].lugar;

  }
}

/*const cargarDatos = () => {

  $.ajax({

    url: 'info.json'

  }).done(function(respuesta) {

    // Ordena eventos.
    function organizarEventos(a, b) {
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
    }

    // eventos ordenados guardados
    let eventosOrdenados = respuesta.eventos.sort(organizarEventos);

    // Arreglos para colocar proximos y pasados.
    let proximos = [];
    let pasados = [];

    // Los eventos proximos se colocan al arreglo "proximos"
    for (let i = 0; i < eventosOrdenados.length; i++) {

      console.log(respuesta.fechaActual);

      if(eventosOrdenados[i].fecha > respuesta.fechaActual ) {
        proximos.push(eventosOrdenados[i]);
      }

    };

    // Los eventos pasados se colocan al arreglo "pasados"
    for (let i = 0; i < eventosOrdenados.length; i++) {

      console.log(respuesta.fechaActual);

      if(eventosOrdenados[i].fecha < respuesta.fechaActual ) {
        pasados.push(eventosOrdenados[i]);
      }

    };

    // Escribimos el primer proximo evento
    primerEvento.innerHTML += `<a href="detalle.html?id=${proximos[0].id}" class="p-2">${proximos[0].nombre}</a>`;
    primerFecha.innerHTML += proximos[0].fecha;
    primerLugar.innerHTML += proximos[0].lugar;

    // Escribimos el primer pasado evento
    primerEventoPasado.innerHTML += `<a href="detalle.html?id=${pasados[0].id}" class="p-2">${pasados[0].nombre}</a>`;
    primerFechaPasada.innerHTML += pasados[0].fecha;
    primerLugarPasado.innerHTML += pasados[0].lugar;

    // Escribimos el segundo proximo evento
    segundoEvento.innerHTML += `<a href="detalle.html?id=${proximos[1].id}" class="p-2">${proximos[1].nombre}</a>`;
    segundaFecha.innerHTML += proximos[1].fecha;
    segundoLugar.innerHTML += proximos[1].lugar;

    // Escribimos el segundo pasado evento
    segundoEventoPasado.innerHTML += `<a href="detalle.html?id=${pasados[1].id}" class="p-2">${pasados[1].nombre}</a>`;
    segundaFechaPasada.innerHTML += pasados[1].fecha;
    segundoLugarPasado.innerHTML += pasados[1].lugar;

  })
}

$(document).ready(function () {

  cargarDatos();

});*/
