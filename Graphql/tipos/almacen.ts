import { gql } from "apollo-server-express";

const TypeAlmacen = gql`
    type almacen {
        _id: ID!
        ciudad: String!
        direccion: String!
        telefono: String!
        nombre: String!
        cliente: ID!
    }

    type Query {
        BAlmacen: [almacen]
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

