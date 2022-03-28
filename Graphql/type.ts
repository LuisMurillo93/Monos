import { gql } from 'apollo-server-express';


const TypeDefs = gql`
    type cliente {
        -id: ID!
        Documento: String!
        Nombre: String!
        Telefono: String!
        Correo: String!
    }

    type Query {
        Clientes: [cliente]
    }
`;

export  { TypeDefs };
