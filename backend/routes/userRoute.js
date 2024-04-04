
import express from 'express';
import { addNewAdmin, getAllDoctor, loginPatient, patientRegister } from '../controller/userController.js';
import { isAdminAuthenticated } from '../middleware/auth.js';


const router = express.Router();


// message public route 
router.post("/signup",patientRegister)
router.post("/login",loginPatient);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.get("/doctors",getAllDoctor)



export default router