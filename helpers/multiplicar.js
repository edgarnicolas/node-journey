const fs = require('fs');

const crearMultiplicar = async (base = 5, listar = false) => {

    try {
        console.log('-------------------------------------');
        console.log('Tabla del:', base);
        console.log('-------------------------------------');
        let salida = '';

        for (let n = 1; n < 13; n++) {
            salida += `5 x ${n} = ${base * n}\n`;
        }

        if (listar != false ) {
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt `;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearMultiplicar
};


