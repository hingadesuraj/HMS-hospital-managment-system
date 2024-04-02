
import express from 'express';
import { patientRegister } from '../controller/userController.js';


const router = express.Router();


// message public route 
router.post("/signup",patientRegister)


export default router