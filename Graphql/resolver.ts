import { clientesModel } from '../models/clientes';


const Resolver = {
    Query: {
        BClientes: async (parent, args) => {
            const cliente = await clientesModel.find();
            return cliente;            
        },
    }, 
};

export { Resolver };