import { Schema, model } from "mongoose";

interface Bodega{
    Prenda: string,
    Referencia: string,
    Cantidad: number,
};


const bodegaSchema = new Schema<Bodega>({
    Prenda:{
        type:String,
        required: true
    },
    Referencia:{
        type: String,
        required: true,
    },
    Cantidad:{
        type: Number,
        required: true
    }

})

const bodegaModel = model("Bodega", bodegaSchema, "bodega");

export default bodegaModel;
