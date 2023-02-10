// Ingresos cargados manualmente.
const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500)
];

// Egresos cargados manualmente.
const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
];

// Llama a las funciones dinámicas para activar "onload()" en body.
let cargarApp = () => {
    cargarHeader();
    cargarIngresos();
    cargarEgresos();
}

// Suma ingresos del arreglo "Ingresos"
let totalIngresos = () => {
    let totalIngreso = 0;

    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }

    return totalIngreso;
}

// Suma egresos del arreglo "Egresos"
let totalEgresos = () => {
    let totalEgreso = 0;

    for(let egreso of egresos) {
        totalEgreso += egreso.valor;
    }

    return totalEgreso;
}

// Funcion para la sección de header
let cargarHeader = () => {

    let presupuesto = totalIngresos() - totalEgresos();

    let porcentajeEgreso = totalEgresos()/totalIngresos();

    // Modificamos los contenedores dinámicamente
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

// Formato de moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

// Formato de porcentaje
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}

// Funcion para cargar los ingresos en el contenedor 'lista-ingresos'.
const cargarIngresos = () => {
    let ingresosHTML = '';

    // Llamamos a la funcion para crear el contenedor del nuevo ingreso.
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

// Funcion para crear los elementos necesarios y modificaciones dinámicas para los ingresos.
const crearIngresoHTML = (ingreso)=>{

    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;

    return ingresoHTML;
}

// Elimina ingresos
const eliminarIngreso = (id) => {

    // Busca y compara los id en el arreglo de 'ingresos'.
    let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id);

    // El id comparado se elimina, solo 1.
    ingresos.splice(indiceEliminar, 1);

    cargarHeader();
    cargarIngresos();
}

// Cargar egresos en el contenedor 'lista-egresos'.
const cargarEgresos = () => {

    let egresosHTML = '';

    // Usamos la función que crea dinámicamente un egreso en formato HTML.
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }

    // Recuperamos el contenedor y agregamos el nuevo elemento.
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

// Creamos dinamicamente un contenedor con los datos de egresos para luego ser agregado.
const crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"
                onclick='eliminarEgreso(${egreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;

    return egresoHTML;
};

// Elimina Egresos
const eliminarEgreso = (id) => {

    // Busca y compara los id en el arreglo de 'egresos'.
    let indiceEliminar = egresos.findIndex( egreso => egreso.id === id);

    // El id comparado se elimina, solo 1.
    egresos.splice(indiceEliminar, 1);

    cargarHeader();
    cargarEgresos();
};

let agregarDato = () => {
    let forma = document.forms['forma'];

    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if (descripcion.value !== '' && valor.value !== '') {

        if (tipo.value === 'ingreso') {
            ingresos.push( new Ingreso(descripcion.value, +valor.value) );
            cargarHeader();
            cargarIngresos();
        }
        else if (tipo.value === 'egreso') {
            egresos.push( new Egreso(descripcion.value, +valor.value) );
            cargarHeader();
            cargarEgresos();
        }
    }
}