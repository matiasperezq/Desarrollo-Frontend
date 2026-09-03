$(document).ready(function () {

    let datosUsuarios = [5, 6, 7, 2, 0, 4, 2, 4, 8, 2, 3, 3, 2];
    let datosVentas = [1, 2, 6, 4, 0, 8, 2, 4, 5, 3, 1, 7, 5];


    document.getElementById("footer-usuarios").onclick = function () {
        let numero = Math.floor(Math.random() * 3) + 1;
        let xhttp = new XMLHttpRequest();

        xhttp.onload = function () {


            let nuevoDato = parseInt(this.responseText.trim());

            document.getElementById("numero-usuarios").innerHTML = nuevoDato + '<i class="icon-arrow-up"></i>';

            datosUsuarios.shift();
            datosUsuarios.push(nuevoDato);

            $("#grafico-usuarios").sparkline(datosUsuarios, {
                type: 'bar', height: '60', barWidth: '4', barSpacing: '1',
                barColor: '#ffffff', negBarColor: '#eeeeee'
            });

        };
        xhttp.open("GET", "ajax/users_online_" + numero + ".html", true);
        xhttp.send();
    };

    // 3 2
    $("#footer-ventas").click(function () {
        let numero = Math.floor(Math.random() * 3) + 1;

        $.ajax({
            url: "ajax/users_online_" + numero + ".html",
            method: "GET",
            success: function (respuesta) {
                let nuevoDato = parseInt(respuesta.trim());

                $("#numero-ventas").html(nuevoDato + '<i class="icon-arrow-up"></i>');

                datosVentas.shift();
                datosVentas.push(nuevoDato);

                $("#grafico-ventas").sparkline(datosVentas, {
                    type: 'bar', height: '60', barWidth: '4', barSpacing: '1',
                    barColor: '#ffffff', negBarColor: '#eeeeee'
                });
            }
        });
    });

});

// 4

let datosPedidos = [5, 6, 7, 2, 0, -4, -2, 4, 8, 2, 3, 3, 2];
let datosVisitas = [7, 2, 2, 2, 1, -4, -2, 4, 8, 0, 3, 3, 5];


setInterval(function () {
    let randomID = Math.floor(Math.random() * 3) + 1;
    let file = "ajax/users_online_" + randomID + ".html";

    fetch(file)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            mostrarPedidos(data);
        });
}, 1000);

function mostrarPedidos(data) {
    let nuevoDato = parseInt(data.trim());

    document.getElementById("numero-pedidos").innerHTML = nuevoDato + '<i class="icon-arrow-up"></i>';

    datosPedidos.shift();
    datosPedidos.push(nuevoDato);
    $("#grafico-pedidos").sparkline(datosPedidos, {
        type: 'bar', height: '60', barWidth: '4', barSpacing: '1',
        barColor: '#ffffff', negBarColor: '#eeeeee'
    });
}


setInterval(function () {
    let randomID = Math.floor(Math.random() * 3) + 1;
    let file = "ajax/users_online_" + randomID + ".html";

    fetch(file)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            mostrarVisitas(data);
        });
}, 1000);

function mostrarVisitas(data) {
    let nuevoDato = parseInt(data.trim());
    document.getElementById("numero-visitas").innerHTML = nuevoDato + '<i class="icon-arrow-down"></i>';
    datosVisitas.shift();
    datosVisitas.push(nuevoDato);
    $("#grafico-visitas").sparkline(datosVisitas, {
        type: 'bar', height: '60', barWidth: '4', barSpacing: '1',
        barColor: '#ffffff', negBarColor: '#eeeeee'
    });
}


// 5
const x = document.getElementById("mapa-usuario");
let mapaInicializado = null;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "La geolocalización no es soportada por este navegador.";
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    if (mapaInicializado !== null) {
        mapaInicializado.remove();
    }

    mapaInicializado = L.map('mapa-usuario').setView([lat, lon], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapaInicializado);

    L.marker([lat, lon]).addTo(mapaInicializado)
        .bindPopup("Estás aquí")
        .openPopup();
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "El usuario denegó el permiso de geolocalización.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "La información de ubicación no está disponible.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "Se acabó el tiempo de espera para obtener la ubicación.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Ocurrió un error desconocido.";
            break;
    }
}

// 6
const apiKey = "qoOoEmOvmUhlKTO1WlgeSpvY9jAb3Dc0";
const fecha = "2026-08-31";

const url = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${fecha}?adjusted=true&apiKey=${apiKey}`;

fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        let contenedor = document.getElementById("grafico-mercado");
        contenedor.innerHTML = "";

        let acciones = datos.results.slice(0, 20);

        let maxPrecio = Math.max(...acciones.map(a => a.c));

        acciones.forEach(accion => {

            let color = "red";
            if (accion.c >= accion.o) {
                color = "green"; //
            }

            let altura = (accion.c / maxPrecio) * 100;

            let barraHTML = `
                <div class="singleBar" style="cursor: pointer;" onclick="verHistorial('${accion.T}')" title="Precio: $${accion.c.toFixed(1)}">
                    <div class="bar">
                        <div class="value" style="height: ${altura}%; background: ${color};"></div>
                    </div>
                    <div class="title" style="font-size: 9px; line-height: 1.2;">${accion.T}<br>
                        <span style="color: #666; font-weight: bold;">$${accion.c.toFixed(1)}</span>
                    </div>
                </div>
            `;
            contenedor.innerHTML += barraHTML;
        });
    });


function verHistorial(ticker) {
    let panel = document.getElementById("panel-velas");
    panel.style.display = "block";

    const urlHistorial = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2026-08-03/2026-09-02?adjusted=true&apiKey=${apiKey}`;

    fetch(urlHistorial)
        .then(res => res.json())
        .then(datos => {

            let dato = [];

            datos.results.forEach(d => {
                dato.push({
                    x: new Date(d.t),
                    y: [d.o, d.h, d.l, d.c] // Apertura, máximo, mínimo, cierre
                });
            });

            let grafico = new CanvasJS.Chart("chartContainer", {
                title: { text: "Historial de " + ticker },
                data: [{
                    type: "candlestick",
                    dataPoints: dato
                }]
            });

            grafico.render();

            
        });
}
