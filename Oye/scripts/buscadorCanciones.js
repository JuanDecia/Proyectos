
let peticion = new XMLHttpRequest();

peticion.open('GET', '../datos.json');

peticion.send();

const formulario = document.querySelector('#buscador');
const boton = document.querySelector('#boton');

peticion.onload = function () {
    if (peticion.status = 200) {

        let canciones = JSON.parse(peticion.response);

        for (let datos of canciones) {

            let res = document.querySelector('#res');

            res.innerHTML += 
            `
            <article class="col-4 bloque-canciones">
                <div class="fondo-imagen-canciones text-center border">
                    <img src="${datos.icono}" width="70px" alt="logo-cancion" />
                </div
                <div class="nombre-cancion">
                    <h4 class="text-center mt-2">${datos.nombre}</h4>
                </div>
                <div class="archivo-mp3">
                    <audio src="${datos.ruta}" type="audio/mp3" controls="controls"></audio>
                </div>
            </article>
            `
        }

        // Buscador
        const filtrar = () => {

            // console.log(formulario.value);

            res.innerHTML = "";
        
            const texto = formulario.value.toLowerCase();
        
            for (let cancion of canciones) {
        
                let nombre = cancion.nombre.toLowerCase();
                
                if (nombre.indexOf(texto) !== -1) {
                    res.innerHTML += `
                    <article class="col-4 bloque-canciones">
                        <div class="fondo-imagen-canciones text-center border">
                                <img src="${cancion.icono}" width="70px" alt="logo-cancion" />
                        </div
                        <div class="nombre-cancion">
                                <h4 class="text-center mt-2">${cancion.nombre}</h4>
                        </div>
                        <div class="archivo-mp3">
                                <audio src="${cancion.ruta}" type="audio/mp3" controls="controls"></audio>
                        </div>
                    </article>
                    `
                }
            }

            if (res.innerHTML === '') {
                res.innerHTML += `
                    <h2>Resultado no encontrado</h2>
                `
            }
        
        }

        boton.addEventListener('click', filtrar)
    }
}






