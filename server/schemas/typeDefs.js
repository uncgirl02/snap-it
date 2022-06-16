const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    username: String
    email: String
    friends: [User]

}
`;

module.exports = typeDefs;
