import { Schema, model } from "mongoose";

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

interface Cliente{
    documento: string, 
    nombre: string,
    telefono: string,
    correo: string,
};

const clienteSchema = new Schema<Cliente>({
    documento: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
        unique: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Por favor ingresa un email valido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor ingresa un email valido']
    },    
});

const clientesModel = model("Cliente", clienteSchema);

export { clientesModel };