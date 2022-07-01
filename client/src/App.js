import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import './App.css';


import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateAlbum from './pages/CreateAlbum';
import EditAlbum from './pages/EditAlbum';


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
                <Route 
                  path="/create" 
                  element={<CreateAlbum />} 
                />
                <Route 
                  path="/edit" 
                  element={<EditAlbum />} 
                />
            </Routes>
          </div>
      </Router>
   </ApolloProvider>
  );
}

export default App;
