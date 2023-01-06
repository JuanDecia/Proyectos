let peticion = new XMLHttpRequest();

peticion.open('GET', '/datos.json');

peticion.send();

peticion.onload = function () {

    if (peticion.status = 200) {

        let canciones = JSON.parse(peticion.response);

        //canciones a ordenar para top 3

        canciones.sort((a, b) => {
            if (a.reproducciones > b.reproducciones) {
                return -1;
            }
            else {
                return 1;
            }
        });

        console.log(canciones);

        console.log(canciones[0]);

        // Agregamos al HTML las canciones ordenadas y sus reproductores

        let cancion1 = document.querySelector('#cancion1');
        let cancion2 = document.querySelector('#cancion2');
        let cancion3 = document.querySelector('#cancion3');

        cancion1.innerHTML = canciones[0].nombre;
        cancion2.innerHTML = canciones[1].nombre;
        cancion3.innerHTML = canciones[2].nombre;

        let reproductor1 = document.querySelector('#reproductor1');
        let reproductor2 = document.querySelector('#reproductor2');
        let reproductor3 = document.querySelector('#reproductor3');

        reproductor1.setAttribute('src', `/canciones/${canciones[0].ruta}`);
        reproductor2.setAttribute('src', `/canciones/${canciones[1].ruta}`);
        reproductor3.setAttribute('src', `/canciones/${canciones[2].ruta}`);

    }
}