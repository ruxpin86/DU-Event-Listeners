const { Schema, model } = require("mongoose");

const resourceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    link: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: True,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Resource = model("Resource", resourceSchema);

module.exports = Resource;
