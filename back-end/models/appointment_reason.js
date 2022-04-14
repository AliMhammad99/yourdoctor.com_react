const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*The doctor will define the appointment reasons he offer.
The user will choose the reason from a drop down menu when booking*/
const modelInfo = new Schema(
  {
    //doctor_user_id refers to basic_user_id inside doctor not _id
    doctor_user_id: { type: Schema.Types.ObjectId, ref: "basic_user" },
    reason: String,
    cost: Double,
  },
  { collection: "appointment_reason" }
);
const model = mongoose.model("appointment_reason", modelInfo);
module.exports = model;
