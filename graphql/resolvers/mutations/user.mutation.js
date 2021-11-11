const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
  createUser: async (parent, args, { User }) => {
    const user = await User.create(args.data);
    return { token: jwt.sign({ user }, 'shhhhh', { expiresIn: '1h' }) };
  },
  signIn: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User does not exist');
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) throw new Error('Wrong Password');
    return { token: jwt.sign({ user }, 'shhhhh', { expiresIn: '1h' }) };
  },
};
