import { gql } from 'apollo-server-express';


const TypeCliente = gql`
    type cliente {
        _id: ID!
        documento: String!
        nombre: String!
        telefono: String!
        correo: String!
    }

    type Query {
        BClientes: [cliente]
        BCliente(
            _id: String!
        ): cliente
    }

    type Mutation {
        crearCliente(
            documento: String!
            nombre: String!
            telefono: String!
            correo: String!
        ): cliente

        editarCliente(
            _id: String!
            documento: String!
            nombre: String!
            telefono: String!
            correo: String!
        ): cliente

        eliminarCliente(_id: String!):cliente


    }
`;

export  { TypeCliente };