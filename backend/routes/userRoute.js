
import express from 'express';
import { addNewAdmin, loginPatient, patientRegister } from '../controller/userController.js';


const router = express.Router();


// message public route 
router.post("/signup",patientRegister)
router.post("/login",loginPatient);
router.post("/admin/addnew",addNewAdmin);



export default router