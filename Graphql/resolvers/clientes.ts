import { clientesModel } from '../../models/clientes';

const clienteResolver = {
    Query: {
        Clientes: async (parents, args) => {
            const clientes = await clientesModel.find();
            return clientes;
        },
    },
    /*
    Mutation: {
        crearCliente: async (parent, args) => {
            const clienteCreado = await clientesModel.create({
                Documento: args.Documento,
                Nombre: args.Nombre,
                Telefono: args.Telefono,
                Correo: args.Correo,
            });
            return clienteCreado;
        }
    }*/
};

export { clienteResolver };