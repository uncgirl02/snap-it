


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

// import Navbar from './components/Navbar';
// import Footer from './components/';

// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ChakraProvider>
          <div>
            <Route
            path="/"
            element={<Home />}
            />
            <Route
            path="/dashboard"
            element={<Dashboard />}
            />
            <Route
            path="/EditAlbum"
            element={<EditAlbum />}
            />
            <Route
            path="/CreateAlbum"
            element={<CreateAlbum />}
            />
          </div>
        </ChakraProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
