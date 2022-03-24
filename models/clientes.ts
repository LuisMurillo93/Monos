import { Schema, model } from "mongoose";

interface Cliente{
    Documento: string, 
    Nombre: string,
    Telefono: string,
    Correo: string,
    Almacenes: number,
};

const clienteSchema = new Schema<Cliente>({
    Documento: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true,
        unique: true
    },
    Telefono: {
        type: String,
        required: true,
        unique: true
    },
    Correo: {
        type: String,
        required: true,
        unique: true
    },
    Almacenes: {
        type: Number,
        required: true
    }

});

const clientesModel = model("Clientes", clienteSchema);

export default clientesModel;