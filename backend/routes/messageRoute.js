
import express from 'express';
import { getAllMessage, messageController } from '../controller/messageController.js';
import {
    isAdminAuthenticated,
    isPatientAuthenticated,
  } from "../middleware/auth.js";

const router = express.Router();


// message public route 
router.post("/message",messageController);
router.get("/message/allmessage",isAdminAuthenticated,getAllMessage)


export default router