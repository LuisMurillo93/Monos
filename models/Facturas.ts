import { Schema, model } from "mongoose";

interface facturas{
    Cliente: string,
    Despacho: string,
    fecha_corte: Date,
    estado_pago: Enumerator,
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
        type: Enumerator,
        required: true,
    }
});


const FacturasModel = model("Factura", FacturasSchema);

export default FacturasModel;
