const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]
    resources: [Resource]
  }

  type Event {
    _id: ID
    creator: String
    eventName: String
    description: String
    link: String
  }

  type Resource {
    _id: ID
    user: String
    link: String
    category: String
    title: String
    description: String
  }

  type Messages {
    _id: ID
    body: String
    user: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input EventInput {
    eventId: ID
    creator: String!
    eventName: String!
    description: String!
    link: String
  }

  input ResourceInput {
    resourceId: ID
    user: String
    link: String
    title: String
    category: String
    description: String
  }

  input MessageInput {
    messageId: ID
    body: String
  }

  type Query {
    allUsers: [User]!

    singleUser(userId: ID!): User

    getMe: User

    getAllResources: [Resource]!

    getResource(resourceId: ID!): Resource

    getMessages: [Messages]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    removeUser: User

    addEvent(userId: ID!, input: EventInput): Event

    removeEvent(input: EventInput): Event

    addResource(userId: ID, input: ResourceInput!): Resource

    addMessage(userId: ID, input: MessageInput!): Messages
  }
`;

module.exports = typeDefs;
