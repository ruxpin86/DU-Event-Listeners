import { gql } from "@apollo/client";

//what is the difference
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

//hmm what is the difference here between this one and the one below?
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
      link
      description
      title
    }
  }
`;

export const QUERY_MESSAGES = gql`
  getMessages{
    messages: {
      _id
      body
      user
    }
  }
`;
