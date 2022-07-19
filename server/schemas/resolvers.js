const { AuthenticationError } = require("apollo-server-express");

const { User, Resource, Messages, Forum, Events } = require("../models");

const { signToken } = require("../utils/auth");
const { ObjectId } = require("mongoose").Types;

const resolvers = {
  Query: {
    allUsers: async () => {
      return User.find();
    },

    singleUser: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    getMe: async (parent, args, context) => {
      // return User.findOne({ _id: "62d32684b3e6fe38d694f1aa" });
      if (context.user) {
        // return User.findOne({ _id: context.user._id });
        const currentUser = await User.findOne({ _id: context.user._id });
        console.log(currentUser);
        return currentUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    getAllResources: async () => {
      return Resource.find();
    },

    getMessages: async () => {
      return Messages.find();
    },

    getAllEvents: async () => {
      return Events.find();
    },

    getForum: async () => {
      return Forum.find();
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password! Please try again!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addEvent: async (parent, { input }, context) => {
      if (context.user) {
        try {
          const event = await Events.create(input);
          const updateUserByEvents = await User.findByIdAndUpdate(
            { _id: context.user._id },
            //maybe change to events: event
            { $addToSet: { events: event._id } },
            {
              new: true,
              runValidators: true,
            }
          );
          console.log({ event, updateUserByEvents });
          return { updateUserByEvents };
        } catch (error) {
          console.log(error);
          return error;
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeEvent: async (parent, { event }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: event } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addResource: async (parent, { userId, input }, context) => {
      if (context.user) {
        // console.log()
        try {
          const resource = await Resource.create(input);
          const updateUserByResource = await User.findByIdAndUpdate(
            { _id: userId },
            { $push: { resources: resource } },
            {
              new: true,
              runValidators: true,
            }
          );
          // console.log(resource);
          return { resource, updateUserByResource };
        } catch (error) {
          console.log(error);
          return error;
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addMessage: async (parent, { userId, input }, context) => {
      console.log(`userId value is ${userId}`);
      console.log(`Input value is ${input}`);
      if (context.user) {
        try {
          const message = await Messages.create(input);
          const updatedUser = await User.findByIdAndUpdate(
            { _id: userId },
            { $push: { messages: message } },
            {
              new: true,
              runValidators: true,
            }
          );
          console.log(message);
          return { message, updatedUser };
        } catch (err) {
          console.error(err);
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addToForum: async (paretn, { userId, input }, context) => {
      try {
        if (context.user) {
          const forumPost = await Forum.create(input);
          const updatedUser = await User.findByIdAndUpdate(
            { _id: userId },
            { $push: { forum: forumPost._id } },
            {
              new: true,
              runValidators: true,
            }
          );
          console.log(forumPost);
          return { forumPost, updatedUser };
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
