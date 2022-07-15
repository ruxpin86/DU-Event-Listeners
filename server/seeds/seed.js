const db = require("../config/connection");
const { User, Events } = require("../models");
const userSeeds = require("./userSeeds.json");
const eventsSeeds = require("./eventsSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Events.deleteMany({});
    const newUsers = await User.create(userSeeds);
    const newEvents = await Events.create(eventsSeeds);
    for (let index = 0; index < newUsers.length; index++) {
      const user = newUsers[index];
      const randomNumber = Math.floor(Math.random() * 2);
      console.log(newEvents[randomNumber]);
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        {
          $addToSet: { events: newEvents[randomNumber] },
        },
        {
          new: true,
        }
      ).populate("events");
      //.populate puts in everything associated with the mongo id it is referencing!
      console.log(updatedUser);
    }
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
