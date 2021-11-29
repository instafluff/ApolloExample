import { ApolloServer } from "apollo-server";

import typeDefs from "./type-defs";
import resolvers from "./resolvers";

const defaultPort = 4000;

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen( process.env.PORT || defaultPort )
    .then( ({ url }) => {
        console.log( `Server ready at ${url}` );
    } );
