import { gql } from '@apollo/client'

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      albums {
        _id
        photos
        albumName
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const GET_ALBUMS = gql`
query Albums($username: String!) {
    albums(username: $username) {
      _id
      albumName
      isPublic
      photos
    }
  }

`