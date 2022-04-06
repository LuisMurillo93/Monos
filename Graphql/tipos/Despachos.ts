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

    type prendaDespacho {
        tipo: String!
        referencia: String!
        cantidades: Int!
        valor_unitario: Float!
    }

    input inPrendaDespacho {
        tipo: String!
        referencia: String!
        cantidades: Int!
        valor_unitario: Float!
    }

    type despacho {
        _id: ID!
        tipo_factura: enum_tipo_factura!
        prendas: [prendaDespacho]!
        valor_Total: Float
        almacen: almacen!
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
            prendas: [inPrendaDespacho]!
            almacen: String!
            estado_pago:enum_estado_pago!
        ): despacho 
    }
`;

export  { TypeDespacho };

