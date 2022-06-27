import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ChakraProvider>
          <div>
            <Route
            path="/"git pull
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
