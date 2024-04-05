
import express from 'express';
import { getAllAppointment, postAppointment } from '../controller/appointmentController.js';
import {
    isAdminAuthenticated,
    isPatientAuthenticated,
  } from "../middleware/auth.js";

const router = express.Router();


// Appointment route 
 router.post("/booking",isPatientAuthenticated,postAppointment)
 router.get("/allbooking",isAdminAuthenticated,getAllAppointment)


export default router