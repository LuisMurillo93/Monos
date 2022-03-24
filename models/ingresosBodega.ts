import { Schema, model } from "mongoose";

interface Bodega{
    Origen: string,
    Fecha_ingreso: Date,
    prendas: string,
    cantidades: number,
    valor_compra: number,
    valor_flete: number,
};

const IngresoSchema = new Schema<Bodega>({
    Origen:{
        type: String,
        required: true,
    },
    Fecha_ingreso:{
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
    valor_compra:{
        type: Number,
        required: true,
    },
    valor_flete:{
        type: Number,
        required: true,
    }
});

const bodegaModel = model("Bodega", IngresoSchema);

export default bodegaModel;
