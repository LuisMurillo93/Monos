import { Schema, model } from "mongoose";

interface Ingreso{
    origen: string,
    fecha_ingreso: Date,
    prendas: [{
        tipo: string,
        referencia: string,
        cantidades: number,
        valor_unitario: number,
    }],
    valor_compra: number,
    valor_flete: number,
};

const IngresoSchema = new Schema<Ingreso>({
    origen:{
        type: String,
        required: true,
    },
    fecha_ingreso:{
        type: Date,
        required: true,
    },
    prendas:[{
        tipo: {type: String, required: true},
        referencia: {type: String, required: true},
        cantidades: {type: Number, required: true},
        valor_unitario: {type: Number, required: true},
    }],
    valor_compra:{
        type: Number,
        default: function() {
            let len = this.prendas.length;
            let sum = 0;
            for (let i = 0; i < len; i++) {
                sum = sum + this.prendas[i].cantidades*this.prendas[i].valor_unitario;
        
            };
            return sum;
        
        },
    },
    valor_flete:{
        type: Number,
        required: true,
    }
});

const ingresoModel = model("Ingreso", IngresoSchema);

export { ingresoModel };
