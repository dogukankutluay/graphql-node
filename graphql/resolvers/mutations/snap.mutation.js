module.exports = {
  createSnap: async (parent, args, { Snap }) => {
    return await Snap.create(args.data);
  },
};
