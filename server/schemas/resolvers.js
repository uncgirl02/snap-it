const { User, Thought, Album } = require("../models");
const { AuthenicationError } = require("apollo-server-express");

const resolvers = {
  Query: {
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

    albums: async(parent, {_id} ) => {
      return Album.findOne({_id});
    }

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
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
        const album = await Album.create({...args, albumName: context.album.albumName})

        await User.findByIdAndUpdate(
          {_id: context.user.id},
          {$push: {albums: album._id}},
          {new: true}
        );

        return album;
      }
      throw new AuthenicationError('You need to be logged in to add an album')
    }
  }
};

module.exports = resolvers;
