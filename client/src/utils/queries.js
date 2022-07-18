import { gql } from "@apollo/client";

//this is where we are querying what we want the user to see, matching what is in typeDefs.js

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
  query getMe {
    user {
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

export const QUERY_ALL_RESOURCES = gql`
  query getAllResources {
    resource {
      _id
      link
      description
      title
    }
  }
`;

export const QUERY_RESOURCE = gql`
  query getResource {
    resource {
      _id
      user
      link
      category
      title
      description
    }
  }
`;
