import  express  from "express";
import  cors  from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import { conectarDB } from "./db/db"
import { clienteType } from "./Graphql/tipos/clientes";
import { clienteResolver } from "./Graphql/resolvers/clientes";
import { Resolver } from './Graphql/resolver';
import { TypeDefs } from './Graphql/type';
import {clientesModel} from './models/clientes';

dotenv.config();

const main = async () => {
    await conectarDB();

    await clientesModel.create({
        Documento: "987654321",
        Nombre: "La rojalia",
        Telefono: "345678",
        Correo: "Roja@Soyla.com",
    })
    .then((u) => {
        console.log("Cliente creado", u);
    })
    .catch((e) => {
        console.error("Error al crear al cliente", e)
    });
};

main();




// const server = new ApolloServer({
//     typeDefs: TypeDefs,
//     resolvers: Resolver,
// });

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.listen( {port: process.env.PORT || 4000 }, async () => {
//     await conectarDB();
//     await server.start();

//     server.applyMiddleware({ app });

//     console.log("Servidor listo");
// });
