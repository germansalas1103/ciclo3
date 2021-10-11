function consultarDisfraz(){
    $.ajax({
        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume",
        type : "GET",
        dataType : "json",

        success  : function(json){
            $("#idDivConsulta").empty();
            var misItems = json.items;
            var card = '<div class="card col-md-3" style="width: 19rem; margin:0.5rem;">';
            var cardBody = '<div class="card-body">';
            var titulo = '<h5 id="" class="card-title">';
            var img =  '<img class="card-img-top" src="http://lorempixel.com/600/200/fashion" alt="Card image cap">'
            var subtitulo = '<h6 class="card-subtitle mb-2 text-muted">';
            var textos = '<p class="card-text">';
            var cierre = "</p></div></div>";

            for (i=0; i < misItems.length; i++){
                $("#idDivConsulta").append(card
                    +img+"</img>"
                    +cardBody+titulo+misItems[i].name+"</h5>"
                    +subtitulo+misItems[i].brand+"</h6>" 
                    +textos+misItems[i].id
                    +cierre);
            }
            console.log(json)
        },
        error : function(xhr,status){
            console.log(xhr)
        }

            }
        
        );
}

function insertardisfraz() {

    var datosEnvio;

    datosEnvio = { 
        id:$("#idCostume").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#categoryId").val(),
        name:$("#name").val(),     
    };

    $.ajax ({

        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume",
        type : 'POST',
        data : datosEnvio,

        success : function(response){
            console.log(response);
        },
        error : function(xhr,status){
            console.log( xhr);
        }
    });
    consultarDisfraz();
}

function borrarDisfraz() {
    
    var datosBorrar;

    datosBorrar = {
        id:$("#idCostume").val(),
    };
    var enviarBorrar = JSON.stringify(datosBorrar);

    $.ajax ({

            url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume",
            type : 'DELETE',
            data : enviarBorrar,
            contentType : "application/json",

            success : function(response){
                console.log(response);
                            },
            error : function(xhr,status){
                console.log(xhr);
            }
        }
    );
    consultarDisfraz();
}

function actualizarDisfraz() {
    var datosAct;

    datosAct = { 
        id:$("#idCostume").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#categoryId").val(),
        name:$("#name").val(),     
    };
    var enviarAct = JSON.stringify(datosAct);

    $.ajax ({

        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume",
        type : 'PUT',
        data : enviarAct,
        contentType : "application/json",

        success : function(response){
            console.log(response);
        },
        error : function(xhr,status){
            console.log( xhr);
        }
    });
    consultarDisfraz();
}

//clientes

function consultarCliente(){
    $.ajax({
        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type : "GET",
        dataType : "json",

        success  : function(json){
            $("#divClientes").empty();
            var misItems = json.items;
            var card = '<div class="card col-md-3" style="width: 19rem; margin:0.5rem;">';
            var cardBody = '<div class="card-body">';
            var titulo = '<h5 id="" class="card-title">';
            var textos = '<p class="card-text">';
            var cierre = "</p></div></div>";

            for (i=0; i < misItems.length; i++){
                $("#divClientes").append(
                    card+cardBody+titulo+misItems[i].name+"</h5>"
                    +textos+misItems[i].email
                    +cierre);
            }
            console.log(json)
        },
        error : function(xhr,status){
            console.log(xhr)
        }

            }
        
        );
}

function insertarCliente() {
    var datosEnvio;

    datosEnvio = { 
        id:$("#idClient").val(),
        email:$("#clientEmail").val(),
        age:$("#clientAge").val(),
        name:$("#clientName").val(),     
    };

    $.ajax ({

        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type : 'POST',
        data : datosEnvio,

        success : function(response){
            console.log(response);
        },
        error : function(xhr,status){
            console.log( xhr);
        }
    });
    consultarCliente()
}

function borrarCliente() {

    var datosBorrar;

    datosBorrar = {
        id:$("#idClient").val(),
    };
    var enviarBorrar = JSON.stringify(datosBorrar);

    $.ajax ({

            url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
            type : 'DELETE',
            data : enviarBorrar,
            contentType : "application/json",

            success : function(response){
                console.log(response);
                            },
            error : function(xhr,status){
                console.log(xhr);
            }
        }
    );
    consultarCliente()
}

function actualizarCliente() {
    var datosAct;

    datosAct = { 
        id:$("#idClient").val(),
        email:$("#clientEmail").val(),
        age:$("#clientAge").val(),
        name:$("#clientName").val(),     
    };
    var enviarAct = JSON.stringify(datosAct);

    $.ajax ({

        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type : 'PUT',
        data : enviarAct,
        contentType : "application/json",

        success : function(response){
            console.log(response);
        },
        error : function(xhr,status){
            console.log( xhr);
        }
    });
    consultarCliente()
}

//mensajes

function consultarMensaje(){
    $.ajax({
        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type : "GET",
        dataType : "json",

        success  : function(json){
            $("#divMensajes").empty();
            var misItems = json.items;
            var card = '<div class="card col-md-3" style="width: 19rem; margin:0.5rem;">';
            var cardBody = '<div class="card-body">';
            var titulo = '<h5 id="" class="card-title">';
            var textos = '<p class="card-text">';
            var cierre = "</p></div></div>";

            for (i=0; i < misItems.length; i++){
                $("#divMensajes").append(
                    card+cardBody+titulo+misItems[i].id+"</h5>"
                    +textos+misItems[i].messagetext
                    +cierre);
            }
            console.log(json)
        },
        error : function(xhr,status){
            console.log(xhr)
        }

            }
        
        );
}

function insertarMensaje() {
    
    var datosEnvio;

    datosEnvio = { 
        id:$("#idMessage").val(),
        messagetext:$("#message").val(),    
    };

    $.ajax ({

        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type : 'POST',
        data : datosEnvio,

        success : function(response){
            console.log(response);
        },
        error : function(xhr,status){
            console.log( xhr);
        }
    });
    consultarMensaje()
}

function borrarMensaje() {
    
    var datosBorrar;

    datosBorrar = {
        id:$("#idMessage").val(),
        messagetext:$("#message").val(), 
    };
    var enviarBorrar = JSON.stringify(datosBorrar);

    $.ajax ({

            url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
            type : 'DELETE',
            data : enviarBorrar,
            contentType : "application/json",

            success : function(response){
                console.log(response);
                            },
            error : function(xhr,status){
                console.log(xhr);
            }
        }
    );
    consultarMensaje()
}

function actualizarMensaje() {
    var datosAct;

    datosAct = { 
        id:$("#idMessage").val(),
        messagetext:$("#message").val(),     
    };
    var enviarAct = JSON.stringify(datosAct);

    $.ajax ({

        url : "https://g2962cc4456df2d-db202110011847.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type : 'PUT',
        data : enviarAct,
        contentType : "application/json",

        success : function(response){
            console.log(response);
        },
        error : function(xhr,status){
            console.log( xhr);
        }
    });
    consultarMensaje()
}

var disfraces = "Index.html";
var cliente = "client.html";
var mensajes = "message.html";

    $(disfraces).ready(consultarDisfraz);

    $(cliente).ready(consultarCliente);

    $(mensajes).ready(consultarMensaje);

