const { Schema, model } = require("mongoose");

//creating a subdocument schema-it won't become its own model but we will use as schema for the Users `events` array in User.js

const eventSchema = new Schema({
  creator: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});
const Events = model("Events", eventSchema);

module.exports = Events;
