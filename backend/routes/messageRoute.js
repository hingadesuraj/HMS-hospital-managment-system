
import express from 'express';
import { messageController } from '../controller/messageController.js';

const router = express.Router();


// message public route 
router.post("/message",messageController);


export default router