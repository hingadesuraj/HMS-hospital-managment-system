import { User } from "../models/userSchema.js";

// create User
export const signUp = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      dob,
      gender,
      password,
      role,
      doctorDepartment,
      docAvatoar,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !dob ||
      !gender ||
      !password ||
      !role
    ) {
      res.status(500).json({
        success: false,
        message: "All Fields Are required please check in...",
      });
    }

    const userData = await User.create({
      firstName,
      lastName,
      email,
      phone,
      dob,
      gender,
      password,
      role,
      docAvatoar,
      doctorDepartment,
    });

    const isExist = await User.findOne({ email });

    if (isExist) {
      res.status(411).json({
        success: false,
        message: "User already exist please try again using different email id",
      });
    }

    res.status(200).json({
      success: true,
      message: "User | Admin Created Successfull..!",
    });
  } catch (error) {
    res.status(411).json({
      success: false,
      message: "Some Thing went wrong..",
    });
  }
};
