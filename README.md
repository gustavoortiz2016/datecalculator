# dateCalculator
Esta librería contiene una serie de funciones *javascript* orientadas al calculo de fecha.

### funciones
* aFecha
* difDiasExcluir
* hrsDiasLaborales

### aFecha
El objetivo de esta función es convertir cualquier objeto a fecha (convertir siempre y cuando sea posible en caso que no retorna un error).
Ejemplo:
**dateCalculator.aFecha(string || integer);**
```javascript
    dateCalculator.aFecha("2020-03-23T22:25:02.975Z")
```

### difDiasExcluir
El objetivo de esta función es calcular el numero de días dentro de un rango de fecha, excluyendo días de la semana (día inicial es 0 Domingo,día final Sabado 6)
Ejemplo:
**dateCalculator.difDiasExcluir(Date,Date,[Array[Integer]]);**
```javascript
    dateCalculator.difDiasExcluir('2020-03-30', '2020-04-06', [6, 0]);
```

### hrsDiasLaborales
El objetivo de esta función es convertir horas, a días. En el caso que se desee calcular el numero de días que representan 32 horas, tomando en cuenta que el consta de 8 horas laborales, el numero de días deben de ser 4.
*Parmetros*:
* **horasCalcular**: numero de horas que deseamos convertir a días
* **numeroHorasLaborales**: horas hábiles ejemplo 8
* **fracciones**: si deseamos que el valor retorne un valor con decimales
* **aMayor**: si deseamos que se aproxime el valor decimal al valor máximo
Ejemplo:
**dateCalculator.hrsDiasLaborales(integer,integer,bool,bool)**
```javascript
    dateCalculator.hrsDiasLaborales(4,8,false,true);
```

### instalacion
```
    npm install g-datecalculator
```
### Uso
```javascript
var dateCalculator = require('g-datecalculator');
var miFecha = dateCalculator.aFecha("2020-03-23T22:25:02.975Z");
```

Para mayor informacion de implementacion puedes revisar el archivo index.test.js
Puedes correr el archivo de test con el comando **npm run test**