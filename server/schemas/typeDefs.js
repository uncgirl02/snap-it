const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friends: [User]
    albums: [Album]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    albums(username: String!): [Album]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    addAlbum(albumName: String!, isPublic: Boolean!, photos:[String]!): Album
    updateUser(username: String!, email: String!, password: String!): User
}

type Album {
    _id: ID
    albumName: String
    isPublic: Boolean
    photos:[String]
}
`;

module.exports = typeDefs;
