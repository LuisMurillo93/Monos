import { almacenModel } from '../../models/almacen';


const resolverAlmacen = {
    Query: {
        BAlmacenes: async (parent, args) => {
            const almacen = await almacenModel.find().populate('cliente').
            populate('despachos');
            return almacen;            
        },
        BAlmacen: async (parent, args) => {
            const almacen = await almacenModel.findOne({
                _id: args._id,
            }).populate('cliente').populate('despachos');
            return almacen;
        },
    },
    Mutation: {
        crearAlmacen: async (parent, args) => {
            const nuevoAlmacen = await almacenModel.create({
                ciudad: args.ciudad!,
                direccion: args.direccion,
                telefono: args.telefono,
                nombre: args.nombre,
                cliente: args.cliente,
            });
            return nuevoAlmacen;
        },
    }, 
};

export { resolverAlmacen };