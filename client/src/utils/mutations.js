import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// mutation addResource($input: ResourceInput) {
//   addResource(input: $input) {
//     resource {
//       _id
//       link
//       title
//       description
//     }
//   }
// }
export const ADD_RESOURCE = gql`
  mutation addResource($input: ResourceInput, $userId: ID) {
    addResource(input: $input, userId: $userId) {
      user
      link
      category
      title
      description
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($input: MessageInput) {
    addMessage(input: $input) {
      _id
      body
      user
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($input: EventInput) {
    addEvent(input: $input) {
      event {
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
