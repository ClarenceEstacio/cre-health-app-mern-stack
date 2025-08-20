const mongoose = require("mongoose");

const schema = mongoose.Schema;

const healthSchema = new schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
    temperature: {
      type: Number,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phonenumber: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
//                              table
// const Health = mongoose.model("health", healthSchema);

const Health = mongoose.model("health", healthSchema);

module.exports = Health; // export to user in server
