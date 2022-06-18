const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    thoughts: [Thought]
    friends: [User]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!, friends:ID!): Auth
}
`;

module.exports = typeDefs;
