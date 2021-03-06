import { gql } from "apollo-server-express";

const TypeIngreso = gql`
    type ingreso {
        _id: ID!
        origen: String!
        fecha_ingreso: Date!
        prendas: [prendaDespacho]!
        valor_compra: Float
        valor_flete: Float!
    }

    type Query {
        BIngreso: [ingreso]
    }

    type Mutation {
        crearIngreso(
            origen: String!
            prendas: [inPrendaDespacho]!
            valor_flete: Float!
        ): ingreso 
    }
`;

export  { TypeIngreso };
