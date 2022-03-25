import { Schema, model } from "mongoose";
import { enum_estado_pago } from "./enumerators";

interface facturas{
    Cliente: string,
    Despacho: string,
    fecha_corte: Date,
    estado_pago: enum_estado_pago,
}

const FacturasSchema = new Schema<facturas>({
    Cliente:{
        type: String,
        required: true,
    },
    Despacho:{
        type: String,
        required: true,
    },
    fecha_corte:{
        type: Date,
        required: true,
    },
    estado_pago:{
        type: String,
        required: true,
        enum: enum_estado_pago
    }
});


const FacturasModel = model("Factura", FacturasSchema);

export default FacturasModel;
