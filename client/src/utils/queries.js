import { gql } from "@apollo/client";

//this is where we are querying what we want the user to see, matching what is in typeDefs.js

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      events {
        _id
        creator
        eventName
        description
        location
        eventDate
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
        _id
        creator
        eventName
        description
        location
        eventDate
        link
      }
    }
  }
`;

export const QUERY_ME = gql`
  query getMe {
    getMe {
      _id
      username
      events {
        _id
        creator
        eventName
        description
        location
        eventDate
        link
      }
      resources {
        _id
        link
        category
        title
        description
      }
      messages {
        _id
        messages
        user
      }
      forum {
        _id
        creator
        topic
        description
        createdAt
      }
    }
  }
`;

export const QUERY_ALL_RESOURCES = gql`
  query getAllResources {
    resource {
      _id
      link
      category
      title
      description
    }
  }
`;

export const QUERY_EVENT = gql`
  query getAllEvents {
    getAllEvents {
      _id
      creator
      eventName
      description
      location
      eventDate
      link
    }
  }
`;
export const QUERY_FORUM = gql`
  query getForum {
    getForum {
      _id
      creator
      topic
      description
      createdAt
    }
  }
`;
