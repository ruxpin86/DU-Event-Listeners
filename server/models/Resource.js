const { Schema, model } = require("mongoose");

const resourceSchema = new Schema(
  {
    link: {
      type: String,
      required: true,
    },
    category: {
      type: String,
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
