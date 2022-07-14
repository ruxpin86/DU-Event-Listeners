const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]
  }

  type Event {
    _id: ID
    creator: String
    eventName: String
    description: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    removeUser: User

    addEvent(userId: ID!, input: EventInput): Event

    removeEvent(input: EventInput): Event
  }

  input EventInput {
    eventId: ID
    creator: String!
    eventName: String!
    description: String!
    link: String
  }
`;

module.exports = typeDefs;
