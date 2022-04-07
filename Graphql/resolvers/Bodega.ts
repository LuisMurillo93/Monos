import { bodegaModel } from '../../models/Bodega';


const resolverBodega = {
    Query: {
        BBodega: async (parent, args) => {
            const bodega = await bodegaModel.find();
            return bodega;            
        },
    },
};

export { resolverBodega };