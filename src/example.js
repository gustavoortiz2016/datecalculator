var dateCalculator = require('./index');
var moment = require('moment');

function calcularSla(fecha, hrs) {
    var dias = dateCalculator.hrsDiasLaborales(hrs, 8, false, true);
    var fInicio = moment(dateCalculator.aFecha(fecha)).add(1, 'days')//se suma un dia por un bug de conversion que le resta 1
    var dI = fInicio.day();//numero de dia de ingreso
    var dFs = dI === 5 ? 3 : dI === 6 ? 2 : dI === 0 ? 1 : 0;//dias que se le sumaran si se ingresa fin de semana
    var dEs = 0;//dias que se suman si en el rango de fecha se encuentra un fin de semana
    var fFin = moment(fInicio).add(dias + dFs + dEs, 'days');
    var difD = dateCalculator.difDiasExcluir(fInicio, fFin, [6, 0]);
    dEs = difD.numeroDiasRestados;
    fFin = moment(fInicio).add(dias + dFs + dEs, 'days');
    var dF = fFin.day()//numero de dia fecha fin
    dFs += dF === 6 ? 2 : 0;
    fFin = moment(fInicio).add(dias + dFs + dEs, 'days');
    console.log('numero de dias sla:', dias)
    console.log('fechaInicio:', fInicio.format('YYYY-MM-DD hh:mm:ss'))
    console.log('diaIngreso:', dI)
    console.log('objDif');
    console.log(difD)
    return fFin.format('YYYY-MM-DD');
}

console.log('Fecha de entrega: ',calcularSla('2020-04-16', 56));