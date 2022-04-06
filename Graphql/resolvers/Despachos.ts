import { DespachosModel } from '../../models/Despachos';



const resolverDespacho = {
    Query: {
        BDespacho: async (parent, args) => {
            const despacho = await DespachosModel.find().populate({
                path: 'almacen', 
                populate: {
                    path: 'cliente'
                }
            }).populate('almacen');
            return despacho;            
        },
    },
    Mutation: {
        crearDespacho: async (parent, args) => {
            const nuevoDespacho = await DespachosModel.create({
                tipo_factura: args.tipo_factura,
                prendas: args.prendas,
                almacen: args.almacen,
                fecha_despacho: Date.now(),
                estado_pago: args.estado_pago,
                fecha_corte: Date.now() + 30,
            });
            return nuevoDespacho;
        },
    }, 
};

export { resolverDespacho };