import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://store-kdzfqbou.saleor.cloud/graphql/",
  cache: new InMemoryCache(),
});

export default client;
