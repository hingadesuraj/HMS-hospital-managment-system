
import express from 'express';
import { loginPatient, patientRegister } from '../controller/userController.js';


const router = express.Router();


// message public route 
router.post("/signup",patientRegister)
router.post("/login",loginPatient)


export default router