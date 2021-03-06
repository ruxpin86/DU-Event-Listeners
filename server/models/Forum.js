const { Schema, model } = require("mongoose");
const replySchema = require("./Reply");
const forumSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    creator: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    replies: [replySchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Forum = model("Forum", forumSchema);

module.exports = Forum;
