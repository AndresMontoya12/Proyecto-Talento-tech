document.addEventListener("DOMContentLoaded",() => {
/*inicio calculadora*/
const boton=document.getElementById("btncalcular");
boton.addEventListener("click", () => {
valorSolar = 0.32; 

const consumo =parseFloat(document.getElementById("consumo"). value);
let calconsumo =(consumo/1000000)*12;
const cosumot = (calconsumo*100)/valorSolar


const resultado = document.getElementById("resultado");
resultado.innerHTML =`${cosumot.toFixed(2)}%  Consumo anual de energía renovable`;
})
/*fin calculadora*/
//---------------------------------------------------------

})//Fin document.addEventListener

//--------------------------------------------------------------------------

//inicio codigo de cargar csv y tabla

async function cargarCSV(url){
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

function procesarCSV(doccsv){
    const lineas =doccsv.split("\n");
    const headers = lineas[0].split(",");
    const filas =lineas.slice(1).filter(linea => linea.trim() !== "" );
    return{
        headers,
        filas: filas.map(fila => fila.split(","))
    }
}

function generarTabla(datos) {
    const tabla = document.getElementById("tabla");
    const thead = tabla.querySelector("thead");
    const tbody = tabla.querySelector("tbody");

    // Limpiar la tabla antes de generar nuevos datos
    thead.innerHTML = ""; // Limpiar encabezados
    tbody.innerHTML = ""; // Limpiar cuerpo de la tabla

    // Crear encabezados
    const trEncabezados = document.createElement("tr");
    datos.headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        trEncabezados.appendChild(th);
    });
    thead.appendChild(trEncabezados);

    // Crear fila de datos
    datos.filas.forEach(fila => {
        const tr = document.createElement("tr");
        fila.forEach(celda => {
            const td = document.createElement("td");
            td.textContent = celda;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}
//fin codigo de cargar csv y tabla
//codigo filtros
function llenarFiltros(datos) {
    const paises = [...new Set(datos.filas.map(fila => fila[0]))];
    const años = [...new Set(datos.filas.map(fila => fila[2]))];

    const filtroPais = document.getElementById("filtro-pais");
    const filtroAnio = document.getElementById("filtro-anio");

    paises.forEach(pais => {
        const option = document.createElement("option");
        option.value = pais;
        option.textContent = pais;
        filtroPais.appendChild(option);
    });

    años.forEach(anio => {
        const option = document.createElement("option");
        option.value = anio;
        option.textContent = anio;
        filtroAnio.appendChild(option);
    });
}
function filtrarTabla(datos, pais, anio) {
    const filasFiltradas = datos.filas.filter(fila => {
        return (pais === "" || fila[0] === pais) && (anio === "" || fila[2] === anio);
    });

    return {
        headers: datos.headers,
        filas: filasFiltradas
    };
}

//fin filtros tabla
(async function () {
    const csvData = await cargarCSV("/Documentos/Datos.csv");
    const datos = procesarCSV(csvData);
    llenarFiltros(datos);

    const filtroPais = document.getElementById("filtro-pais");
    const filtroAnio = document.getElementById("filtro-anio");

    filtroPais.addEventListener("change", () => {
        const datosFiltrados = filtrarTabla(datos, filtroPais.value, filtroAnio.value);
        generarTabla(datosFiltrados);
    });

    filtroAnio.addEventListener("change", () => {
        const datosFiltrados = filtrarTabla(datos, filtroPais.value, filtroAnio.value);
        generarTabla(datosFiltrados);
    });

    generarTabla(datos);
})();





//Codigo funcionamiento del carrusel
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

//fin codigo del funcionamiento del carrusel


