import { Schema, model } from "mongoose";

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

interface Cliente{
    Documento: string, 
    Nombre: string,
    Telefono: string,
    Correo: string,
};

const clienteSchema = new Schema<Cliente>({
    Documento: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true,
    },
    Telefono: {
        type: String,
        required: true,
        unique: true
    },
    Correo: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Por favor ingresa un email valido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor ingresa un email valido']
    },    
});

const clientesModel = model("Cliente", clienteSchema);

export { clientesModel };