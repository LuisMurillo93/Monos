import conectarDB from './db/db';
import clientesModel from './models/clientes';

const main = async () => {
    await conectarDB();

    await clientesModel.create({
        Documento: "12345679",
        Nombre: "Juan Claudio",
        Telefono: "12345679",
        Correo: "draco0923@hotmail.com",
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

