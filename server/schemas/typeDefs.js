const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    thoughts: [Thought]
    friends: [User]
}

type Thought{
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    
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
    addThought(thoughtText: String!): Thought
}
`;

module.exports = typeDefs;
