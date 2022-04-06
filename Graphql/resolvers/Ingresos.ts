import { ingresoModel } from '../../models/Ingresos';


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
                fecha_ingreso: args.fecha_ingreso,
                prendas: args.prendas,
                valor_flete: args.valor_flete,            });
            return nuevoIngreso;
        },
    }, 
};

export { resolverIngreso };