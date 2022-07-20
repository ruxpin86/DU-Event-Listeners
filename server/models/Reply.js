const { Schema } = require("mongoose");

const replySchema = new Schema({
  forumId: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = replySchema;
