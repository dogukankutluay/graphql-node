const UserQueries = `
    user(id: ID!): User!
    users: [User!]!
    activeUser:User
`;
const UserMutations = `
    createUser(data: CreateUserInput!): Token
    signIn(data: SignInUserInput!): Token
`;
const UserTypes = `
    type User {
        _id:ID
        username: String!
        createdAt: Date
        snaps:[Snap!]!
    }
`;
const UserInputs = `
    input CreateUserInput {
        username: String!
        password: String!
    }
    input SignInUserInput {
        username: String!
        password: String!
    }
`;

module.exports = {
  UserQueries,
  UserInputs,
  UserTypes,
  UserMutations,
};
