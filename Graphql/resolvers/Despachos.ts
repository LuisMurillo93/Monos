import { DespachosModel } from '../../models/Despachos';


const resolverDespacho = {
    Query: {
        BDespacho: async (parent, args) => {
            const despacho = await DespachosModel.find();
            return despacho;            
        },
    },
    Mutation: {
        crearDespacho: async (parent, args) => {
            const nuevoDespacho = await DespachosModel.create({
                ciudad: args.ciudad!,
                direccion: args.direccion,
                telefono: args.telefono,
                nombre: args.nombre,
                cliente: args.cliente,
            });
            return nuevoDespacho;
        },
    }, 
};

export { resolverDespacho };