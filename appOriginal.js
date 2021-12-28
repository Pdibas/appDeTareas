let fs = require('fs');
let arrayApp = fs.readFileSync('./tareas.json','utf-8')
let appParseada= JSON.parse(arrayApp);

function arrayParseado (){
    return appParseada;
}

module.exports=arrayParseado;

let process = require('process');
let listar = process.argv[2];

if (listar==undefined){
    listar='undefined';
}
let listado = require('./funcionesDeTareas');

listado(listar);

