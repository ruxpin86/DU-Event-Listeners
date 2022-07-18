const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const Events = require("./Events");
const Resource = require("./Resource");
//  const instant-messagingSchema = require("./Instant-Messaging"); Maybe we will need this for instant messaging
const messages = require("../models/Instant-Messaging");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Must use a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      match: [
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password needs: Minimum eight characters, at least one letter, one number and one special character",
      ],
    },
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Events",
      },
    ],
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: "Resource",
      },
    ],
    messages: [messages.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// this MAY NOT WORK we are using .map to create the eventList of all the events the user has favorited
userSchema.virtual("eventList").get(function () {
  return this.events.map;
});

const User = model("User", userSchema);

module.exports = User;
