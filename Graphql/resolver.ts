import { clientesModel } from '../models/clientes';


const Resolver = {
    Query: {
        Clientes: async (parent, args) => {
            const clientes = await clientesModel.find();
            return clientes;            
        },
    }, 
};

export { Resolver };