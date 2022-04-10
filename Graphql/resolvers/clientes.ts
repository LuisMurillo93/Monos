import { clientesModel } from '../../models/clientes';


const resolverCliente = {
    Query: {
        BClientes: async (parent, args) => {
            const cliente = await clientesModel.find().populate({
                path: 'almacenes', 
                populate: {
                    path: 'despachos'
                }
            });
            return cliente;            
        },
        BCliente: async (parent, args) => {
            const cliente = await clientesModel.findOne({
                _id: args._id
            }).populate({
                path: 'almacenes', 
                populate: {
                    path: 'despachos'
                }
            });
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
        editarCliente: async (parent, args) => {
            const clienteEditado = await clientesModel.findByIdAndUpdate(
                args._id, {
                    documento: args.documento,
                    nombre: args.nombre,
                    correo: args.correo,
                    telefono: args.telefono,                    
            });
            return clienteEditado;
        },
        eliminarCliente: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const clienteEliminado = await clientesModel.findByIdAndDelete({
                    _id: args._id,
                });
                return clienteEliminado;
            } else if (Object.keys(args).includes('correo')) {
                const clienteEliminado = await clientesModel.findByIdAndDelete({
                    correo: args.correo,
                });
                return clienteEliminado;
            }
        },  
    }, 
};

export { resolverCliente };