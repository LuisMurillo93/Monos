import { Schema, model } from "mongoose";

interface Despachos{
    tipo_factura: Enumerator,
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
        type: Enumerator,
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

const DespachosModel = model("Despachos", DespachoSchema);

export default DespachosModel;