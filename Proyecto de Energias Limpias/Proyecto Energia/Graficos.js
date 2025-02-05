document.addEventListener("DOMContentLoaded", async () => {
    const botonescambio = document.querySelectorAll(".selector .opcion");
    const contenidosdiv = document.querySelectorAll(".contenidogr div");

    botonescambio.forEach((botoncam) => {
        botoncam.addEventListener("click", function () {
            const contenidoId = this.getAttribute("data-contenido");

            contenidosdiv.forEach((contenido) => {
                contenido.classList.remove("info-activa");
                contenido.classList.add("info-oculta");
            });

            const contenidoActivo = document.getElementById(contenidoId);
            contenidoActivo.classList.remove("info-oculta");
            contenidoActivo.classList.add("info-activa");
        });
    });

    document.querySelector(".selector .opcion").click();
    // Fin botones Cambiar gráficos div
    //------------------------------------------------------

    //----------------------------------------------------------
    // Inicio Código para Gráfica
        // Crear la gráfica
        let ctxbarra = document.getElementById("grafica1").getContext("2d");
        let ctxLinea = document.getElementById("graficaLinea").getContext("2d");
        let ctxTorta = document.getElementById("graficaTorta").getContext("2d");
        let ctxArea = document.getElementById("graficaArea").getContext("2d");

        //grafico barra
        let opciones1 = {
            type: "bar",
            data: {
                labels: ["2017", "2018", "2019", "2020", "2021"],
                datasets: [
                    {
                        label: "Energia Solar",
                        data: [1.9912593, 2.1187904, 2.4441278, 2.820657, 2.8208168],
                        backgroundColor: "rgb(107, 189, 110)",
                    },
                    {
                        label: "Energia Hydroelectrica",
                        data: [0.005, 0.012, 0.13206, 0.1908, 0.31732163],
                        backgroundColor: "rgb(23, 58, 185)",
                    },
                    {
                        label: "Energia Eolica",
                        data: [0.003071419, 0.04344, 0.06332, 0.01012, 0.059852246],
                        backgroundColor: "rgb(255, 99, 132)",
                    },
                    {
                        label: "Geo Energia",
                        data: [ 57.32773, 56.65124, 54.437, 49.83735, 59.858196],
                        backgroundColor: "rgb(75, 192, 192)",
                    },
                ],
            }
        }
        let graficabarras = new Chart(ctxbarra, opciones1);

        //Grafico Linea
        let opcLinea = {
            type: 'line',
        data: {
            labels: ['2017', '2018', '2019', '2020', '2021'], // Etiquetas de los años
            datasets: [{
                label: 'Chile',
                data: [1.809, 2.137, 2.653698, 3.205438, 4.3600069999999995], // Los valores
                borderColor: 'rgba(1, 95, 163)', // Color de la línea
                borderWidth: 2, // Ancho de la línea
                fill: false // No llenar el área bajo la línea
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw.toFixed(3); // Limitar a 3 decimales en las etiquetas
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true // Asegura que el eje Y comience en 0
                }
            }
        }
        }
        let graficaLinea = new Chart(ctxLinea, opcLinea);

        //grafico torta
        let opctorta = {
            type: 'pie',
        data: {
            labels: ['2017', '2018', '2019', '2020', '2021'], // Etiquetas de los años
            datasets: [{
                label: 'Colombia',
                data: [0.01, 0.02, 0.13, 0.19, 0.32], // Los valores
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)', // Color para el 2017
                    'rgba(153, 102, 255, 0.2)', // Color para el 2018
                    'rgba(255, 159, 64, 0.2)', // Color para el 2019
                    'rgba(54, 162, 235, 0.2)', // Color para el 2020
                    'rgba(255, 99, 132, 0.2)'  // Color para el 2021
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)', // Color del borde
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1 // Ancho del borde
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw.toFixed(3); // Limitar a 3 decimales en las etiquetas
                        }
                    }
                }
            }
        }
        }
        let graficatorta = new Chart(ctxTorta, opctorta);
        //Grafica Area
        let opcArea = {
            type: 'line', // El tipo sigue siendo 'line', pero vamos a configurar el área
            data: {
                labels: ['2017', '2018', '2019', '2020', '2021'], // Etiquetas de los años
                datasets: [{
                    label: 'Colombia',
                    data: [0.01, 0.02, 0.13, 0.19, 0.32], // Los valores
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color del área bajo la línea
                    borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
                    borderWidth: 2, // Ancho de la línea
                    fill: true // Esto activa el área bajo la línea
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.raw.toFixed(3); // Limitar a 3 decimales en las etiquetas
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true // Asegura que el eje Y comience en 0
                    }
                }
            }
        }
        let graficaArea = new Chart(ctxArea, opcArea);

});