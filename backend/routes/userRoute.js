
import express from 'express';
import { signUp } from '../controller/userController.js';


const router = express.Router();


// message public route 
router.post("/signup",signUp)


export default router