
import express from 'express';
import { addNewAdmin, getAllDoctor, getUserDetails, loginPatient, patientRegister } from '../controller/userController.js';
import { isAdminAuthenticated } from '../middleware/auth.js';


const router = express.Router();


// message public route 
router.post("/signup",patientRegister)
router.post("/login",loginPatient);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.get("/doctors",getAllDoctor)
router.get("/userdetails",isAdminAuthenticated,getUserDetails)



export default router