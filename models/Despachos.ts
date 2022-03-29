import { Schema, model } from "mongoose";
import { enum_tipo_factura } from "./enumerators"
import { almacenModel } from "./almacen"
import { enum_estado_pago } from "./enumerators";

interface Despachos{
    tipo_factura: enum_tipo_factura,
    prendas: string,
    cantidades: number,
    valor_unitario: number,
    valor_Total: number,
    almacen: Schema.Types.ObjectId,
    fecha_despacho: Date,
    estado_pago: enum_estado_pago,
    fecha_corte: Date,

}

const DespachoSchema = new Schema<Despachos>({
    tipo_factura:{
        type: String,
        required: true,
        enum: enum_tipo_factura
    },
    prendas:{
        type: String,
        required: true,
    },
    cantidades:{
        type: Number,
        required: true,
    },
    valor_unitario:{
        type: Number,
        required: true,
    },
    valor_Total:{
        type: Number,
        required: true,
    },
    almacen:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: almacenModel,
    },
    fecha_despacho:{
        type: Date,
        required: true,
    },
    estado_pago:{
        type: String,
        required: true,
        enum: enum_estado_pago
    },
    fecha_corte:{
        type: Date,
        required: true,
    }
});

const DespachosModel = model("Despacho", DespachoSchema);

export { DespachosModel} ;