import { gql } from 'apollo-server-express';


const TypeDefs = gql`
    type cliente {
        _id: ID!
        documento: String!
        nombre: String!
        telefono: String!
        correo: String!
    }

    type Query {
        BClientes: [cliente]
    }

    type Mutation {
        crearCliente(
            documento: String!
            nombre: String!
            telefono: String!
            correo: String!
        ): cliente 
    }
`;

export  { TypeDefs };
