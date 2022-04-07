import { gql } from "apollo-server-express";

const TypeBodega = gql`
    type bodega {
        _id: ID!
        tipo: String!
        referencia: String!
        cantidades: Int!
    }

    type Query {
        BBodega: [bodega]
    }

`;

export  { TypeBodega };

