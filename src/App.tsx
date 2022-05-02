import { useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});
function App() {
  useEffect(() => {
    client
      .query({
        query: gql`
          query GetRates {
            rates(currency: "USD") {
              currency
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <h1>Apollo Client</h1>
    </div>
  );
}
export default App;
