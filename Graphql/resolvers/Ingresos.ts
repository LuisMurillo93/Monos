import { ingresoModel } from '../../models/Ingresos';
import { bodegaModel } from '../../models/Bodega';

const resolverIngreso = {
    Query: {
        BIngreso: async (parent, args) => {
            const ingreso = await ingresoModel.find();
            return ingreso;            
        },
    },
    Mutation: {
        crearIngreso: async (parent, args) => {
            const nuevoIngreso = await ingresoModel.create({
                origen: args.origen,
                fecha_ingreso: Date.now(),
                prendas: args.prendas,
                valor_flete: args.valor_flete,           
            });
            let len = args.prendas.length;
            for (let i = 0; i < len; i++) {
                const ingresarBodega = await bodegaModel.findOneAndUpdate({
                    tipo: args.prendas[i].tipo,
                    referencia: args.prendas[i].referencia
                }, {
                    $inc: {
                        cantidades: args.prendas[i].cantidades,
                    }
                },
                { upsert: true, new: true, setDefaultsOnInsert: true });
            };
            return nuevoIngreso;
        },
    }, 
};

export { resolverIngreso };