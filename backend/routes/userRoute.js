
import express from 'express';
import { addNewAdmin, loginPatient, patientRegister } from '../controller/userController.js';
import { isAdminAuthenticated } from '../middleware/auth.js';


const router = express.Router();


// message public route 
router.post("/signup",patientRegister)
router.post("/login",loginPatient);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);



export default router