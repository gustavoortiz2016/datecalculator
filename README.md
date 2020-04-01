# dateCalculator
Esta librería contiene una serie de funciones *javascript* orientadas al calculo de fecha.

### funciones
* aFecha
* difDiasExcluir

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

### instalacion
```
    npm install g-datecalculator
```
### Uso
```
var dateCalculator = require('dateCalculator');
var miFecha = dateCalculator.aFecha("2020-03-23T22:25:02.975Z");
```

Para mayor informacion de implementacion puedes revisar el archivo index.test.js
Puedes correr el archivo de test con el comando **npm run test**