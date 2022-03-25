import { Schema, model } from "mongoose";
import { enum_tipo_factura } from "./enumerators"
import { clientesModel } from "./clientes"

interface Despachos{
    tipo_factura: enum_tipo_factura,
    prendas: string,
    cantidades: number,
    valor_unitario: number,
    valor_Total: number,
    Cliente: string,
    almacen: string,
    fecha_despacho: Date,

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
    Cliente:{
        type: String,
        required: true,
    },
    almacen:{
        type: String,
        required: true,
    },
    fecha_despacho:{
        type: Date,
        required: true,
    }
});

const DespachosModel = model("Despacho", DespachoSchema);

export default DespachosModel;