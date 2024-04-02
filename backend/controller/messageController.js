import { Message } from "../models/messageSchema.js";

export const messageController = async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
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
  } catch (error) {
    console.log(error.message);
    res.status(411).json({
      success: false,
      message: "some thing went wrong" + error.message,
    });
  }
};
