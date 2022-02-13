const mongoose = require("mongoose");

const userClinicSchema = new mongoose.Schema({
  clinicName: {
    type: String,
  },
  listOfUsers: [
    {
      currUserName: {
        type: String,
      },
      currUserContact: {
        type: String,
      },
      currUserToken: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const userClinicModel = mongoose.model("users_of_clinics", userClinicSchema);
module.exports = userClinicModel;
