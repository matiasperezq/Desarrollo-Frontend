$(document).ready(function() {

    let datosUsuarios = [5,6,7,2,0,4,2,4,8,2,3,3,2];
    let datosVentas = [1,2,6,4,0,8,2,4,5,3,1,7,5];

    
    document.getElementById("footer-usuarios").onclick = function() {
        let numero = Math.floor(Math.random() * 3) + 1;
        let xhttp = new XMLHttpRequest();
        
        xhttp.onload = function() {
            
                
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
    $("#footer-ventas").click(function() {
        let numero = Math.floor(Math.random() * 3) + 1;
        
        $.ajax({
            url: "ajax/users_online_" + numero + ".html",
            method: "GET",
            success: function(respuesta) {
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