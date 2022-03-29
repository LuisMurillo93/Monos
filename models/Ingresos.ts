import { Schema, model } from "mongoose";

interface Ingreso{
    origen: string,
    fecha_ingreso: Date,
    prendas: string,
    cantidades: number,
    referencia: string,
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
    prendas:{
        type: String,
        required: true,
    },
    cantidades:{
        type: Number,
        required: true,
    },
    referencia:{
        type: String,
        required: true
    },
    valor_compra:{
        type: Number,
        required: true,
    },
    valor_flete:{
        type: Number,
        required: true,
    }
});

const ingresoModel = model("Ingreso", IngresoSchema);

export { ingresoModel };
