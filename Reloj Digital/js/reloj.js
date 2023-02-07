// Creamos la llamada del objeto Date

const mostrarReloj = () => {
    let fecha = new Date();

    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hora} : ${minutos} : ${segundos}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    fechaTexto = `${diaSemana}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = '0' + hora;
        return hora;
}

// Realizamos script para que se actualice el reloj cada segundo
setInterval(mostrarReloj, 1000);

