import { DespachosModel } from '../../models/Despachos';
import { bodegaModel } from '../../models/Bodega';


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
            var date = new Date();
            var ndate = new Date(date);
            const nuevoDespacho = await DespachosModel.create({
                tipo_factura: args.tipo_factura,
                prendas: args.prendas,
                almacen: args.almacen,
                fecha_despacho: date,
                fecha_corte: ndate.setDate(ndate.getDate() + 30),
            });
            let len = args.prendas.length;
            for (let i = 0; i < len; i++) {
                const despacharBodega = await bodegaModel.findOneAndUpdate({
                    tipo: args.prendas[i].tipo,
                    referencia: args.prendas[i].referencia
                }, {
                    $inc: {
                        cantidades: -args.prendas[i].cantidades,
                    }
                },
                { upsert: true, setDefaultsOnInsert: true });
            };
            return nuevoDespacho;
        },
    }, 
};

export { resolverDespacho };