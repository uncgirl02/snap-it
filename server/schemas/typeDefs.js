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
    reactionCount: Int
    reactions: [Reaction]
}

type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    thoughts (username: String): [Thought]
    thought(_id:ID!): Thought
}

type Mutation {
    addUser(username: String!, email: String!, password: String!, friends:ID!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
}

type Album {
    _id: ID
    albumName: String
    createdAt: String
    
}
type Query {
    albums: [Album]
}
`;

module.exports = typeDefs;
