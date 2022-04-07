import { Schema, model } from "mongoose";

interface Bodega{
    tipo: string,
    referencia: string,
    cantidades: number,
    valor_unitario: number
};


const bodegaSchema = new Schema<Bodega>({
    tipo:{
        type:String,
        required: true
    },
    referencia:{
        type: String,
        required: true,
    },
    cantidades:{
        type: Number,
        required: true
    },
    valor_unitario:{
        type: Number,
        required: true,
    }

})

const bodegaModel = model("Bodega", bodegaSchema, "bodega");

export { bodegaModel };
