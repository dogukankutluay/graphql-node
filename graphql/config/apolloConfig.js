const { ApolloServer } = require('apollo-server-express');
const { PubSub } = require('graphql-subscriptions');
const resolvers = require('../resolvers/index');
const typeDefs = require('../types/index');
const User = require('../../models/User');
const Snap = require('../../models/Snap');

const apolloConfig = async app => {
  const pubSub = new PubSub();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      User,
      Snap,
      activeUser: req.activeUser,
      pubSub,
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
};
module.exports = apolloConfig;
