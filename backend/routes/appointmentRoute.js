
import express from 'express';
import { postAppointment } from '../controller/appointmentController.js';
import {
    isAdminAuthenticated,
    isPatientAuthenticated,
  } from "../middleware/auth.js";

const router = express.Router();


// Appointment route 
 router.post("/booking",isPatientAuthenticated,postAppointment)


export default router