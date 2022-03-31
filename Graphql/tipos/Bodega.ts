import { gql } from "apollo-server-express";

const TypeBodega = gql`
    type bodega {
        _id: ID!
        prenda: String!
        referencia: String!
        cantidad: Int!
    }

    type Query {
        BBodega: [bodega]
    }

    type Mutation {
        crearBodega(
            prenda: String!
            referencia: String!
            cantidad: Int!
        ): bodega 
    }
`;

export  { TypeBodega };

