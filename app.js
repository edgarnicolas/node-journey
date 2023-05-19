const {crearMultiplicar} = require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption:true
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        demandOption:false,
        default:false,
    })
    .check((argv, options)=>{
        if (isNaN(argv.b)){
            throw 'La base debe ser un numero';
        }
        return true;
    })
    .argv;

console.clear();

console.log(argv);




// const [, , arg3= 'base=9'] = process.argv;
// const [, base] = arg3.split('=')


// const base = 7;




crearMultiplicar(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

