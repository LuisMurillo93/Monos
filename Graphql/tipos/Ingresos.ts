import { gql } from "apollo-server-express";

const TypeIngreso = gql`
    type ingreso {
        _id: ID!
        origen: String!
        fecha_ingreso: Date!
        prendas: String!
        cantidades: String!
        referencia: String!
        valor_compra: Number!
        valor_flete: Number!
    }

    type Query {
        BIngreso: [ingreso]
    }

    type Mutation {
        crearIngreso(
            origen: String!
            fecha_ingreso: Date!
            prendas: String!
            cantidades: String!
            referencia: String!
            valor_compra: Number!
            valor_flete: Number!
        ): almacen 
    }
`;

export  { TypeIngreso };
