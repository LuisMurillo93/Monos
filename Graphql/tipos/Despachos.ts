import { gql } from "apollo-server-express";

const TypeDespacho = gql`

    enum enum_estado_pago {
        PAGADO
        DEBE
        ABONO
    }

    enum enum_tipo_factura {
        TIPO1
        TIPO2
    }

    type despacho {
        _id: ID!
        tipo_factura: enum_tipo_factura!
        prendas: String!
        cantidades: Int!
        valor_unitario: Float!
        valor_Total: Float!
        almacen: ID!
        fecha_despacho: Date!
        estado_pago:enum_estado_pago!
        fecha_corte: Date!

    }

    type Query {
        BDespacho: [despacho]
    }

    type Mutation {
        crearDespacho(
            tipo_factura: enum_tipo_factura!
            prendas: String!
            cantidades: Int!
            valor_unitario: Float!
            valor_Total: Float!
            almacen: ID!
            fecha_despacho: Date!
            estado_pago:enum_estado_pago!
            fecha_corte: Date!
        ): almacen 
    }
`;

export  { TypeDespacho };

