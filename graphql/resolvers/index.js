const Query = require('./queries/Query');
const Snap = require('./queries/Snap');
const User = require('./queries/User');
const Mutation = require('./mutations/index');
module.exports = {
  Query,
  Mutation,
  Snap,
  User,
  Subscription: {
    sayi: {
      subscribe: (parent, args, { pubsub }) => {
        return pubsub.asyncIterator('sayi');
      },
    },
  },
};
