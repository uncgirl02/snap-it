const { User, Thought } = require("../models");
const { AuthenicationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
      }
      throw new AuthenicationError("not logged in");
    }
  },
thoughts: async (parent, { username}) => {
  const params = username ? { username} : {};
  return Thougth.find(parsams).sort({ createdAt: -1});
},
thought: async (parent, {_id}) => {
  return Thought.findOne({_id});
},

  Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
      
        return user;
      },
  addThought: async (parent, args, context) => {
    if (context.user) {
      const thought = await Thought.create({ ...args, username: context.user.username});

      await User.findByIdAndUpdate(
        {_id: context.user._id},
        { $push: { thoughts: thought._id}},
        {new: true}
      );
      return thought;
    }
    throw new AuthenticationError("You must log in")
  }
}
};

module.exports = resolvers;
