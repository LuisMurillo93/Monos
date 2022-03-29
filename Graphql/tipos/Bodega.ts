import { gql } from "apollo-server-express";

const TypeBodega = gql`
    type bodega {
        _id: ID!
        prenda: String!
        referencia: String!
        cantidad: String!
    }

    type Query {
        BBodega: [bodega]
    }

    type Mutation {
        crearBodega(
            prenda: String!
            referencia: String!
            cantidad: String!
        ): bodega 
    }
`;

export  { TypeBodega };

