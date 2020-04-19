var expect = require('chai').expect;
var dateCalculator = require('./index');

describe('dateCalculator', function () {
    describe('aFecha', function () {
        it('deveria de convertir "2020-03-23T22:25:02.975Z"string a Date', function (done) {
            expect(dateCalculator.aFecha("2020-03-23T22:25:02.975Z")).to.satisfy(esFecha);
            function esFecha(respuesta) {
                console.log('respuesta:', respuesta);
                return typeof respuesta === 'object';
            }
            done();
        });
        it('deveria de convertir "2020-03-23"string a Date', function (done) {
            expect(dateCalculator.aFecha("2020-03-23")).to.satisfy(esFecha);
            function esFecha(respuesta) {
                console.log('respuesta:', respuesta);
                return typeof respuesta === 'object';
            }
            done();
        });
    });

    describe('difDiasExcluir', function () {
        it("fechas sin exclusion '2020-03-30','2020-04-06' debe retornar 7", function (done) {
            expect(dateCalculator.difDiasExcluir('2020-03-30', '2020-04-06')).to.satisfy(validarDias);
            function validarDias(respuesta) {
                console.log('respuesta:', respuesta);
                return respuesta.numeroDias === 7;
            }
            done();
        });
        it("fechas con exclusion de 6,0 '2020-03-30','2020-04-06' debe retornar 5", function (done) {
            expect(dateCalculator.difDiasExcluir('2020-03-30', '2020-04-06', [6, 0])).to.satisfy(validarDias);
            function validarDias(respuesta) {
                console.log('respuesta:', respuesta);
                return respuesta.numeroDias === 5;
            }
            done();
        });
    });
    describe('hrsDiasLaborales', function () {
        it("horas a calcular 16, horas laborales 8 el valor debe de ser 2", function (done) {
            expect(dateCalculator.hrsDiasLaborales(16,8,false,true)).to.satisfy(validarDias);
            function validarDias(respuesta) {
                console.log('respuesta:', respuesta);
                return respuesta === 2;
            }
            done();
        });
        
    });
});