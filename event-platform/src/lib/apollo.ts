import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tqfidb08fd01uk8p5uhshb/master',
    cache: new InMemoryCache()})