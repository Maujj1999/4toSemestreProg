//this === global = true

//Mostrar algo en consola
//console.log();

//Mostrar un mensaje en forma de error
//console.error();

//Ejecutamos un codigo despues de un intervalo de tiempo
//setTimeout(() => { });

//Ejecutamos un codigo cada intervalo de tiempo
//setInterval(() => { });

//Da prioridad de ejecucion a una funcion asincronica
//setImmdiate(() => { });

//console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo); //Detenemos al interval
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Saludo inmediato');
});

console.log(__filename);

global.miVariable = 'mi variable global';
console.log(miVariable);