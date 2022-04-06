import { Schema, model } from "mongoose";
import { enum_tipo_factura } from "./enumerators"
import { almacenModel } from "./almacen"
import { enum_estado_pago } from "./enumerators";



interface Despachos{
    tipo_factura: enum_tipo_factura,
    prendas: [{
        tipo: string,
        referencia: string,
        cantidades: number,
        valor_unitario: number,
    }],
    valor_total: number,
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
    prendas:[{
        tipo: {type: String, required: true},
        referencia: {type: String, required: true},
        cantidades: {type: Number, required: true},
        valor_unitario: {type: Number, required: true},
    }],
    valor_total:{
        type: Number,
        default: function() {
            let len = this.prendas;
            let sum = 0;
            for (let i = 0; i < len; i++) {
                sum = sum + this.prendas[i].cantidades*this.prendas[i].valor_unitario
        
            };
            return sum;
        
        },
        
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