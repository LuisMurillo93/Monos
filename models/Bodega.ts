import { Schema, model } from "mongoose";

interface Bodega{
    prenda: string,
    referencia: string,
    cantidad: number,
};


const bodegaSchema = new Schema<Bodega>({
    prenda:{
        type:String,
        required: true
    },
    referencia:{
        type: String,
        required: true,
    },
    cantidad:{
        type: Number,
        required: true
    }

})

const bodegaModel = model("Bodega", bodegaSchema, "bodega");

export { bodegaModel };
