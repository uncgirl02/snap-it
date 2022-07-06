const { User, Thought, Album } = require("../models");
const { AuthenicationError, AuthenticationError } = require("apollo-server-express");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user){

        const userData = await User.findOne({_id: context.user._id})
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends')
  
          return (userData);
      }
      throw new AuthenicationError('Not Logged In');
    },
    users: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("thoughts")
          .populate("friends")
          .populate("albums");
      }
      throw new AuthenicationError("not logged in");
    },

    user: async (parent, { username }) => {
      const params = username ? { username } : {};
      return User.findOne(params).sort({ createdAt: -1 });
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },

    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },

    albums: async(parent, {username}) => {
      const params = username ? { username } : {};
      return Album.find(params).sort({ createdAt: -1 });
    },
    
    albums: async() => {
      const params = username ? { username } : {};
      return User.find(params).sort({ createdAt: -1 });
    },

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return {token, user};
    },
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if(!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw){
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return {token, user};
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
        return thought;
      }
      throw new AuthenticationError("You must log in");
    },
    addReaction: async (parent, { thoughtId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Thought.findOneAndUpdate(
          { _id: thoughtId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedThought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');

    },
    addAlbum: async (parent, args, context) => {
      if (context.user) {
        const album = await Album.create({
          ...args,
          username: context.user.username
        })

        await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {albums: album._id}},
          {new: true}
        );

        return album;
      }
      throw new AuthenticationError('You need to be logged in to add an album');
    }
  }
};

module.exports = resolvers;
