import conectarDB from './db/db';
import clientesModel from './models/clientes';

const main = async () => {
    await conectarDB();

    await clientesModel.create({
        Documento: "1234567",
        Nombre: "Pepe Le Pu",
        Telefono: "1234567",
        Correo: "Pepe@verguer.com",
        Almacenes: 1,
    })
    .then((u) => {
        console.log("Cliente creado", u);
    })
    .catch((e) => {
        console.error("Error al crear al cliente", e)
    });
};

main();

