import { clientesModel } from '../models/clientes';


const Resolver = {
    Query: {
        BClientes: async (parent, args) => {
            const cliente = await clientesModel.find();
            return cliente;            
        },
    },
    Mutation: {
        crearCliente: async (parent, args) => {
            const nuevoCliente = await clientesModel.create({
                documento: args.documento,
                nombre: args.nombre,
                correo: args.correo,
                telefono: args.telefono,
            });
            return nuevoCliente;
        },
    }, 
};

export { Resolver };