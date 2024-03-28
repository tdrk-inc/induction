import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { theme } from "@/styles";
import { parseCookies } from "nookies";
import { setContext } from "@apollo/client/link/context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const token = parseCookies().token;

  useEffect(() => {
    if (!token && !router.pathname.match(/\/auth/g))
      router.push("/auth/signin");
  }, [token, router.pathname]);

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
