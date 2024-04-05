
import express from 'express';
import { deleteAppointment, getAllAppointment, postAppointment, updateAppointmentStatus } from '../controller/appointmentController.js';
import {
    isAdminAuthenticated,
    isPatientAuthenticated,
  } from "../middleware/auth.js";

const router = express.Router();


// Appointment route 
 router.post("/booking",isPatientAuthenticated,postAppointment)
 router.get("/allbooking",isAdminAuthenticated,getAllAppointment)
 router.put("/statusupdate/:id",isAdminAuthenticated,updateAppointmentStatus)
 router.delete("/delete/:id",isAdminAuthenticated,deleteAppointment)


export default router