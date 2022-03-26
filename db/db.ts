import { connect } from 'mongoose';

const conectarDB = async () => {
    return await connect(process.env.DATABASE_URL)
    .then(() =>{
        console.log('Conexión exitosa')
    })
    .catch((e) => {
        console.error('Error al conectar a la db', e);
    });
};

export { conectarDB };


