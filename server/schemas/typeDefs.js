const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]
    resources: [Resource]
    messages: [Messages]
  }

  type Event {
    _id: ID
    creator: String!
    eventName: String!
    description: String!
    location: String!
    eventDate: String!
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
    messages: [String]
    user: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input EventInput {
    creator: String!
    eventName: String!
    description: String!
    location: String!
    eventDate: String!
    link: String
  }

  input ResourceInput {
    user: String!
    link: String!
    title: String!
    category: String!
    description: String!
  }

  input MessageInput {
    body: String
    user: String
  }

  type Query {
    allUsers: [User]!

    singleUser(userId: ID!): User

    getMe: User

    getAllResources: [Resource]

    getResource(resourceId: ID!): Resource

    getMessages: [Messages]!

    getAllEvents: [Event]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    removeUser: User

    addEvent(input: EventInput): Event

    removeEvent(input: EventInput): Event

    addResource(userId: ID, input: ResourceInput): Resource

    addMessage(userId: ID, input: MessageInput): Messages
  }
`;

module.exports = typeDefs;
