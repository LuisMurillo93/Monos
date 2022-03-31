import { gql } from "apollo-server-express";

const TypeAlmacen = gql`
    type almacen {
        _id: ID!
        ciudad: String!
        direccion: String!
        telefono: String!
        nombre: String!
        cliente: cliente!
    }

    input inAlmacen {
        _id: ID!
        ciudad: String
        direccion: String
        telefono: String
        nombre: String
        cliente: inCliente
    }

    type Query {
        BAlmacenes: [almacen]
        BAlmacen(_id: String!): almacen

    }

    type Mutation {
        crearAlmacen(
            ciudad: String!
            direccion: String!
            telefono: String!
            nombre: String!
            cliente: String!
        ): almacen 
    }
`;

export  { TypeAlmacen };

