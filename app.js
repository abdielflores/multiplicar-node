const argv = require('./config/yargs').argv;
//const colors = require('colors');
var colors = require('colors/safe');
let argv2 = process.argv;
//console.log(argv);
//console.log(argv2);

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log(argv.base);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)} `))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

let base = 'abc';
/*
 */