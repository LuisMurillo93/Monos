import { connect } from 'mongoose';

const conectarDB = async () => {
    return await connect(
        "mongodb+srv://Dante:dantesco93@monosdb.lda2a.mongodb.net/Tienda?retryWrites=true&w=majority"
    )
    .then(() =>{
        console.log('Conexión exitosa')
    })
    .catch((e) => {
        console.error('Error al conectar a la db', e);
    });
};

export default conectarDB;


