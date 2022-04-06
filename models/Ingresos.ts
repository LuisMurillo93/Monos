import { Schema, model } from "mongoose";

interface Ingreso{
    origen: string,
    fecha_ingreso: Date,
    prendas: [{
        tipo: string,
        referencia: string,
        cantidades: number,
        valor_unitario: number,
    }],
    valor_compra: number,
    valor_flete: number,
};

const IngresoSchema = new Schema<Ingreso>({
    origen:{
        type: String,
        required: true,
    },
    fecha_ingreso:{
        type: Date,
        required: true,
    },
    prendas:[{
        tipo: {type: String, required: true},
        referencia: {type: String, required: true},
        cantidades: {type: Number, required: true},
        valor_unitario: {type: Number, required: true},
    }],
    valor_compra:{
        type: Number
    },
    valor_flete:{
        type: Number,
        required: true,
    }
});

const ingresoModel = model("Ingreso", IngresoSchema);

export { ingresoModel };
