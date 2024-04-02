import { Message } from "../models/messageSchema.js";

export const messageController = async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const messageData = await Message.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  res.status(200).json({
    success: true,
    message: "Message Send Successfull..",
  });
};


