import  jwt  from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js"
import ErrorHandler from "./errorMiddleware.js"
import { User } from "../models/userSchema.js";



export const isAdminAuthenticated = catchAsyncError(async (req,res,next)=>{
        // check user valid or not then forward to next
        const token = req.cookies.adminToken

        if(!token){
                return next(new ErrorHandler("Admin not authenticated",400));
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)

        req.user = await User.findById(decode.id);

        if(req.user.role !== "Admin"){
                return next(new ErrorHandler(`${req.user.role} not authorized for this resources!`,403))
        }

        next()
})