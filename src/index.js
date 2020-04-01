var moment = require('moment');
var aFecha = function (fecha) {
    if (fecha) {
        if (typeof fecha === 'object')
            return fecha;
        else if (typeof fecha === 'number')
            return new Date(fecha);
        else if (typeof fecha === 'string' && !isNaN(fecha))
            return new Date(parseInt(fecha));
        else if (typeof fecha === 'string' && isNaN(fecha))
            return new Date(fecha);
        else
            throw new Error('Fecha Invalida');
    } else {
        throw new Error('Ingrese una fecha');
    }
}
var difDiasExcluir = function (fechaInicio, fechaFin, arrExcluir) {
    fechaInicio = aFecha(fechaInicio);
    fechaFin = aFecha(fechaFin);
    if (typeof fechaInicio !== 'object' || typeof fechaFin !== 'object')
        throw new Error('Fecha invalida');
    var fecha = moment(fechaInicio);
    var numDias = Math.abs(moment(fechaInicio).diff(fechaFin, 'days'));
    var arrRestaNumDias = [];
    var excluir = [];
    if (arrExcluir && typeof arrExcluir === 'object')
        excluir = arrExcluir;
    if (excluir.length > 0) {
        for (var i = 0; i < numDias; i++) {
            fecha = fecha.add(1, 'days');
            if (excluir.indexOf(fecha.day()) !== -1)
                arrRestaNumDias.push(fecha);
        }
    }
    numDias = numDias - arrRestaNumDias.length;
    return ({ numeroDias: numDias, numeroDiasRestados: arrRestaNumDias.length, arrayDiasRestados: arrRestaNumDias });
}
module.exports = { aFecha: aFecha, difDiasExcluir: difDiasExcluir };