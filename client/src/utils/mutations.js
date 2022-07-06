import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_ALBUM = gql `
    mutation addAlbum($albumName: String!, $isPublic: Boolean!, $photos:[String]!){
        addAlbum(albumName: $albumName, isPublic: $isPublic, photos:$photos) {
            _id
            albumName
            isPublic
            photos
        }
    }
`;

export const ADD_FRIEND = gql `
`