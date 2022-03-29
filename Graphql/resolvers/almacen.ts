import { almacenModel } from '../../models/almacen';


const resolverAlmacen = {
    Query: {
        BAlmacen: async (parent, args) => {
            const almacen = await almacenModel.find();
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