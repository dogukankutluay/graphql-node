const Snap = {
  user: async (parent, args, { User }) => {
    return User.findById(parent.user_id);
  },
};
module.exports = Snap;
