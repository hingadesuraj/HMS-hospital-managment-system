import app from "../app.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import {Appointment} from "../models/appointmentSchema.js";
import {User} from "../models/userSchema.js";

export const postAppointment = catchAsyncError(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    appointmentDate,
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !gender ||
    !appointmentDate ||
    !department ||
    !doctor_firstName ||
    !doctor_lastName ||
    !hasVisited
  ) {
    return next(new ErrorHandler("All Fields Are Required", 400));
  }

//   store doctor info in isConflict variable
  const isConflict = await User.find({
    firstName:doctor_firstName,
    lastName:doctor_lastName,
    role:"Doctor",
    doctorDepartment:department
  })


  if(isConflict.length === 0){
    return next(new ErrorHandler("Doctor Not Found..",404))
  }
  if(isConflict.length > 1){
    return next(new ErrorHandler("Doctor found more than one please contact using email and phone ",404))
  }

  const doctorId = isConflict[0]._id;
  const patientId = req.user._id ; // id get from isPatientAuthenticated middleware 

  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    appointmentDate,
    department,
   doctor:{
    firstName:doctor_firstName,
    lastName:doctor_lastName
   },
    hasVisited,
    doctorId,
    patientId
  });

 res.status(200).json({
    success:true,
    message:"Appointment Book successfull.",
    appointment
 })

});


// get all apointment

export const getAllAppointment = catchAsyncError(async(req,res,next)=>{
    const allAppointment = await Appointment.find();
    res.status(200).json({
        success:true,
        message:"All Appointment",
        allAppointment
    })
})

// update appointment status

export const updateAppointmentStatus = catchAsyncError(async(req,res,next)=>{
    const {id} = req.params
    // console.log(id)

    const appointment = await Appointment.findById(id);

    // console.log(appointment)
    if(!appointment){
        return next(new ErrorHandler("Appointment of this id is not found please check",404))
    }

    const updateAppointment = await Appointment.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        message:"Appointment Status Updated..",
        updateAppointment
    })
})


// delete appointment

export const deleteAppointment = catchAsyncError(async(req,res,next)=>{
    const {id} = req.params;

    const appointment = await Appointment.findById(id);

    if(!appointment){
        return next(new ErrorHandler("Appointment not found please check",404))
    }

    await Appointment.deleteOne();
    res.status(200).json({
        success:true,
        message:"Appointment Delete..",
    })

})