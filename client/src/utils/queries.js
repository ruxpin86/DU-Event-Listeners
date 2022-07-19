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
// You may need to put this back in but i was messing with the QUERY_ME on the front end here, feel free to change back!

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
        user
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
