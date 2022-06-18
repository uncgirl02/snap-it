const { User } = require("../models");
const { AuthenicationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    // users: async (parent, args, context) => {
      // if (context.user) {
      //   return await User.findOne({ _id: context.user._id }).select(
      //     "-__v -password"
      //   );
      // }
      // throw new AuthenicationError("not logged in");
    }
  },

//   Mutation: {
//     addUser: async (parent, args) => {
//         const user = await User.create(args);
      
//         return user;
//       }
// }
};

module.exports = resolvers;
