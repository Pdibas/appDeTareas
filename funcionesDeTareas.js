let arrayParse = require('./app');
function listado(listar){
    switch (listar.toLowerCase()){
        case 'listar':

            console.log('_________________________________________________');
            console.log(arrayParse());
            console.log('*************************************************');
            break
        case 'undefined':
            console.log('______________________________________'+ "\n" + 'Atención - Tienes que pasar una acción' + '\n'+ 'acción :  listar'+ '\n' +'**************************************');
            break
        default:
            console.log('_____________________________\nNo entiendo qué quieres hacer\n*****************************');
    }
}
module.exports=listado;
