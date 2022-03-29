import { gql } from "apollo-server-express";

const TypeDespacho = gql`

    type enum_estado_pago {
        PAGADO
        DEBE
        ABONO
    }

    type enum_tipo_factura {
        TIPO1
        TIPO2
    }

    type despacho {
        _id: ID!
        tipo_factura: enum_tipo_factura!
        prendas: String!
        cantidades: String!
        valor_unitario: String!
        valor_Total: ID!
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
            cantidades: Number!
            valor_unitario: Number!
            valor_Total: Number!
            almacen: ID!
            fecha_despacho: Date!
            estado_pago:enum_estado_pago!
            fecha_corte: Date!
        ): almacen 
    }
`;

export  { TypeDespacho };

