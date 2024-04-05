import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "User More than Three latter"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "User More than Three latter"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be contain 10 digits"],
    maxLength: [10, "Phone number must be contain 10 digits"],
  },

  dob: {
    type: Date,
    required: [true, "DOB is required"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  appointmentDate: {
    type: String,
    required: [true, " Appointment Date is required"],
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    required: true,
  },
  doctorId:{
    type:mongoose.Schema.ObjectId,
    required:true
  },
  patientId:{
    type:mongoose.Schema.ObjectId,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:String,
    // required:true,
    enum:["Pending","Accepted","Rejected"],
    default:"Pending"
  }

});

// create and export modal of schema

export const Appointment = mongoose.model("Appointment", appointmentSchema);
