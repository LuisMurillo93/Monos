import { Schema, model } from "mongoose";

interface Bodega{
    tipo: string,
    referencia: string,
    cantidades: number,
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
        required: true,
        min: 0,
    },
});

const bodegaModel = model("Bodega", bodegaSchema, "bodega");

export { bodegaModel };
