//La palabra async no es necesaria en las funciones, porque ya son asincronas
//Igual proyectan una sincronia visual

async function hola(nombre) {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            console.log('Hola ' + nombre);
            miCallback(nombre);
        }, 1000); 
    });  
}

async function hablar(nombre) {
    return new Promise( (resolve, rejact) => { //Usamos la sintaxis ES6
        setTimeout(function () {
            console.log('bla bla bla bla');
            resolve(nombre);
            callbackHablar();
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            //resolve();
            reject('Hay un error');
        }, 1000);
    });
    
}
//await hola('Arel'); //Esto es una mala sintaxis
//await solo es valido dentro de una funcion asincrona

async function  main() {
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...')
}
//console.log('Empezamos el proceso...')
//main();
//console.log('Esta va a ser la segunda instruccion')

//Codigo en ingles
// The word async is not necessary in the functions, because they are already asynchronous
// However, they provide a visual synchronization

async function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hello ' + name);
            myCallback(name);
        }, 1000);
    });
}

async function talk(name) {
    return new Promise((resolve, reject) => { // We use ES6 syntax
        setTimeout(function () {
            console.log('blah blah blah blah');
            resolve(name);
            callbackTalk();
        }, 1000);
    });
}

async function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Goodbye ' + name);
            // resolve();
            reject('There is an error');
        }, 1000);
    });
}

// await hello('Arel'); // This is bad syntax
// await is only valid within an async function

async function main() {
    let name = await hello('Ariel');
    await talk();
    await talk();
    await goodbye(name);
    console.log('Process ends...')
}

console.log('We are starting the process...')
main();
console.log('This will be the second instruction');
