const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    thoughts: [Thought]
    friends: [User]
    albums: [Album]
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
    albums(username: String!): [Album]
    thought(_id:ID!): Thought
}

type Mutation {
    addUser(username: String!, email: String!, password: String!, friends:ID!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addAlbum(albumId: ID!): Album
}

type Album {
    _id: ID
    albumName: String
    createdAt: String

}
`;

module.exports = typeDefs;
