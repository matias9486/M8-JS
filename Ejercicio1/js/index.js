const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let flujoDeCajaPrueba = [
    {   Mes: MESES[0], 
        Ingresos: 1500,
        Egresos: 1500
    },
    {   Mes: MESES[1], 
        Ingresos: 2500,
        Egresos: 2500
    },
    {   Mes: MESES[2], 
        Ingresos: 84683,
        Egresos: 1155
    },
    {   Mes: MESES[3], 
        Ingresos: 135353,
        Egresos: 1533
    },
    {   Mes: MESES[4], 
        Ingresos: 1535,
        Egresos: 5434
    },
    {   Mes: MESES[5],
        Ingresos: 4343354,
        Egresos: 5434543
    },
    {   Mes: MESES[6],
        Ingresos: 435453,
        Egresos: 4543
    },
    {   Mes: MESES[7],
        Ingresos: 78351,
        Egresos: 7816
    },
    {   Mes: MESES[8],
        Ingresos: 1878,
        Egresos: 95634
    },
    {   Mes: MESES[9],
        Ingresos: 48483,
        Egresos: 9433
    },
    {   Mes: MESES[10],
        Ingresos: 35483,
        Egresos: 53133
    },
    {   Mes: MESES[11],
        Ingresos: 3843,
        Egresos: 348133
    }
];

let flujoDeCaja = cargarFlujoDeCaja();

mostrarFlujoDeCaja(flujoDeCaja);

function ingresarValorNumericoValido(mensaje) {
    let valorNumerico;
    do {
        valorNumerico = Number(prompt(mensaje));
    }while(!valorNumerico || valorNumerico < 0);

    return valorNumerico;
}

function cargarFlujoDeCaja(){
    let aux = [];
    for (let mes = 0; mes < MESES.length; mes++) {
        let datosMes = {};
        //pedir datos y validar
        let ingresos = ingresarValorNumericoValido(`Ingrese los ingresos de ${MESES[mes]} (Monto mayor o igual a 0)`);
        let egresos = ingresarValorNumericoValido(`Ingrese los egresos de ${MESES[mes]} (Monto mayor o igual a 0)`);
        datosMes.Mes = MESES[mes];
        datosMes.Ingresos = ingresos;
        datosMes.Egresos = egresos;
        //agregar a arreglo
        aux.push(datosMes);        
    }        
    //retorna arreglo cargado    
    return aux;
}

function calcularBalanceMensual(ingreso, egreso){
    return ingreso - egreso;
}

function obtenerBalanceMensual(saldo)
{
    return saldo >= 0? `Ganancias: $${saldo}`: `Perdidas: -$${-saldo}`;
}

function mostrarFlujoDeCaja(flujoDeCaja){
    let mensajeGlobal='';
    flujoDeCaja.forEach(element => {
        const saldo = calcularBalanceMensual(element.Ingresos, element.Egresos);
        const balanceMensual = obtenerBalanceMensual(saldo);
        let mensaje = `${element.Mes}:\nIngresos: $${element.Ingresos} Egresos: -$${element.Egresos} ${balanceMensual}\n\n`;
        console.log(mensaje);
        mensajeGlobal += mensaje;
    });
    alert(mensajeGlobal);
}