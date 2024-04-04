import { User } from "../models/userSchema.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { generateToken } from "../utils/jwtToken.js";

// wrap all controller function in asyncerror handler
export const patientRegister = catchAsyncError(async (req, res, next) => {
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
    return next(new ErrorHandler("Please Fill all fields ", 400));
  }

  const isExist = await User.findOne({ email });

  if (isExist) {
    return next(
      new ErrorHandler("User already exist, plese use other email address", 400)
    );
  }

  await User.create({
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
  });

  res.status(200).json({
    success: true,
    message: "Patient | User registration successfull",
  });
});

// login
export const loginPatient = catchAsyncError(async (req, res, next) => {
  const { email, password, confirmPassword, role } = req.body;

  if (!email || !password || !confirmPassword || !role) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  if (password !== confirmPassword) {
    return next(new ErrorHandler("Password does not match please check", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  // console.log(user)
  if (!user) {
    return next(new ErrorHandler("Invalid email id ", 400));
  }

  const isPasswordMatch = await user.comparePassword(confirmPassword);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Password does not match please check", 400));
  }

  if (role !== user.role) {
    return next(new ErrorHandler("User with this role not found ", 400));
  }

  // const token = await user.generateJsonWebToken()

  // console.log(token)

  generateToken(user, "User Login Successfull.", 200, res);

  // res.status(200).json({
  //     success:true,
  //     message:"Login Successfull!",
  //     token:token
  // })
});

// Add new Admin in database using old admin

export const addNewAdmin = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, dob, gender, password } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !gender ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill all fields ", 400));
  }

  const isRegister = await User.findOne({ email });
  if (isRegister) {
    return next(new ErrorHandler("Admin with this email already exist", 400));
  }

  User.create({
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    password,
    role: "Admin",
  });

  res.status(200).json({
    success: true,
    message: "New Admin Created",
  });
});

// get all doctor

export const getAllDoctor = catchAsyncError(async (req, res, next) => {
  const doctor = await User.find({ role: "Doctor" });
  res.status(200).json({
    success: true,
    message: "All Doctor Fetch ",
    doctor: doctor,
  });
});

// user authenticated and get user details admin | Patient
export const getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = req.user; // this user get from auth function because this route authenticated
  res.status(200).json({
    success: true,
    user: user,
  });
});

// logout Admin

export const logoutAdmin = catchAsyncError((req, res, next) => {
  res
    .status(200)
    .cookie("adminToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Admin Logout Successfull..",
    });
});

// logout Patient

export const logoutPatient = catchAsyncError((req, res, next) => {
  res
    .status(200)
    .cookie("patientToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Patient Logout Successfull..",
    });
});
