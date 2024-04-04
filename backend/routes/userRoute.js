
import express from 'express';
import { addNewAdmin, getAllDoctor, getUserDetails, loginPatient, patientRegister } from '../controller/userController.js';
import { isAdminAuthenticated, isPatientAuthenticated } from '../middleware/auth.js';


const router = express.Router();


// message public route 
router.post("/signup",patientRegister)
router.post("/login",loginPatient);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.get("/doctors",getAllDoctor)
router.get("/admin/userdetails",isAdminAuthenticated,getUserDetails) // for admin
router.get("/patient/userdetails",isPatientAuthenticated,getUserDetails) // for patient



export default router