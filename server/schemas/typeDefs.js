const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Critic]!
  }

  type Critic {
    _id: ID
    ReviewText: String
    ReviewAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Critic]
    thought(thoughtId: ID!): Critic
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(ReviewText: String!): Critic
    addComment(thoughtId: ID!, commentText: String!): Critic
    removeThought(thoughtId: ID!): Critic
    removeComment(thoughtId: ID!, commentId: ID!): Critic
  }
`;

module.exports = typeDefs;
