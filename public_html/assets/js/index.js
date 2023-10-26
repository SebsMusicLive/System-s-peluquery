
function mostrarPagCita(){



    return "agendar_cita.html" ;
}


function mostrarAPi () {

    let url ="";


    fetch(url)
    .then(data => Response.json(data))
    .then(data => mostrarData(data))
    .catch(error => console.log(error))


    const mostrarData = (data) => {

        

    }
}