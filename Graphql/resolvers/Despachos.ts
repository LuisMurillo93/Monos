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
            var date = new Date();
            var ndate = new Date(date);
            const nuevoDespacho = await DespachosModel.create({
                tipo_factura: args.tipo_factura,
                prendas: args.prendas,
                almacen: args.almacen,
                fecha_despacho: date,
                fecha_corte: ndate.setDate(ndate.getDate() + 30),
            });
            return nuevoDespacho;
        },
    }, 
};

export { resolverDespacho };