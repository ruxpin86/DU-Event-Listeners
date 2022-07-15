import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      events {
        creator
        eventId
        creator
        eventName
        description
        link
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      events {
        creator
        eventId
        creator
        eventName
        description
        link
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      events {
        creator
        eventId
        creator
        eventName
        description
        link
      }
    }
  }
`;
