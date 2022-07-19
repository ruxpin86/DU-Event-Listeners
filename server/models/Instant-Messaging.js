const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    messages: [
      {
        type: String,
      },
    ],
    user: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Messages = model("Messages", messageSchema);

module.exports = Messages;
