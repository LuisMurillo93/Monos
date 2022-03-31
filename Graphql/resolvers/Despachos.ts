import { DespachosModel } from '../../models/Despachos';


const resolverDespacho = {
    Query: {
        BDespacho: async (parent, args) => {
            const despacho = await DespachosModel.find().populate({
                path: 'almacen', 
                populate: {
                    path: 'cliente'
                }
            });
            return despacho;            
        },
    },
    Mutation: {
        crearDespacho: async (parent, args) => {
            const nuevoDespacho = await DespachosModel.create({
                tipo_factura: args.tipo_factura,
                prendas: args.prendas,
                cantidades: args.cantidades,
                valor_unitario: args.valor_unitario,
                valor_Total: args.valor_Total,
                almacen: args.almacen,
                fecha_despacho: args.fecha_despacho,
                estado_pago: args.estado_pago,
                fecha_corte: args.fecha_corte,
            });
            return nuevoDespacho;
        },
    }, 
};

export { resolverDespacho };