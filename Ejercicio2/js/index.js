let ofertaCreditos = [
    {   Nombre: 'Plan001', 
        Capital: 150000,
        Plazo: 30,
        Tasa: 0.15
    },
    {   Nombre: 'Plan002', 
        Capital: 300000,
        Plazo: 180,
        Tasa: 0.10
    },
    {   Nombre: 'Plan003', 
        Capital: 485000,
        Plazo: 60,
        Tasa: 0.23
    },
];

let planesDetalladosConInteres = generarArrayPlanesDetallados(ofertaCreditos);
mostrarPlanesDetallados(planesDetalladosConInteres);


function calcularInteresPlan(plan){
    return (plan.Capital * plan.Plazo * plan.Tasa)/100;
}

//Función modificada para agregar el campo interés a los planes
function detallarPlan(plan)
{
    let planDetallado = plan;
    planDetallado.Interes = calcularInteresPlan(plan);
    
    return planDetallado;
}

//Función que genera el array con los planes detallados
function generarArrayPlanesDetallados(ofertaCreditos){
    let planesDetallados = [];
    ofertaCreditos.forEach(plan => {
        planesDetallados.push(detallarPlan(plan));
    });
    return planesDetallados;
}

function mostrarPlanesDetallados(planes){
    let mensajeGlobal='';

    planes.forEach(element => {        
        let mensaje = `${element.Nombre}:\nCapital: $${element.Capital}. Plazo: ${element.Plazo} días. Tasa: ${element.Tasa}. Interés: $${element.Interes}\n\n`;
        console.log(mensaje);
        mensajeGlobal += mensaje;
    });
    alert(mensajeGlobal);
}