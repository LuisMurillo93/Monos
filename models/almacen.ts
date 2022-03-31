import { Schema, model } from "mongoose";
import { clientesModel } from "./clientes"


interface Almacenes {
    ciudad: string,
    direccion: string,
    telefono: string,
    nombre: string,
    cliente: Schema.Types.ObjectId
};


const almacenSchema = new Schema<Almacenes>({
    ciudad:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: clientesModel
    }

},{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}

});

almacenSchema.virtual('despachos', {
    ref: 'Despacho',
    localField: '_id',
    foreignField: 'almacen'
    
});

const almacenModel = model("Almacen", almacenSchema);

export { almacenModel};