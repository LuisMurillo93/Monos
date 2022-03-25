import  express  from "express";
import  cors  from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import { conectarDB } from "./db/db"

dotenv.config();

const server = new ApolloServer({
    typeDefs: "",
    resolvers: "",
});

const app = express();

app.use(cors());

app.listen( {port: process.env.PORT}, async () => {
    await conectarDB();
    await server.start();

    server.applyMiddleware({ app });

    console.log("Servidor listo");
});
