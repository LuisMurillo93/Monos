import { bodegaModel } from '../../models/Bodega';


const resolverBodega = {
    Query: {
        BBodega: async (parent, args) => {
            const bodega = await bodegaModel.find();
            return bodega;            
        },
    },
    Mutation: {
        crearBodega: async (parent, args) => {
            const nuevaBodega = await bodegaModel.create({
                prenda: args.prenda,
                referencia: args.referencia,
                cantidad: args.cantidad,
            });
            return nuevaBodega;
        },
    }, 
};

export { resolverBodega };