import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/dashboard" 
                element={<Dashboard />} 
              />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  </ChakraProvider>
)
