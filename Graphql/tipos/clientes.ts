import { gql } from "apollo-server-express";


const clienteType = gql`
    type Cliente {
        -id: ID!
        Documento: String!
        Nombre: String!
        Telefono: String!
        Correo: String!
    }

    type query {
        CClientes: [Cliente]
    }

    type mutation {
        crearCliente(
            Documento: String!,
            Nombre: String!,
            Telefono: String!,
            Correo: String!,
        )

    }
`;

export { clienteType };