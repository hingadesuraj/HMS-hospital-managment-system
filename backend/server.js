// using module type then must be required full path include file extension like .js,.html
import app from "./app.js";
import cloudinary from "cloudinary";
import { catchAsyncError } from "./middleware/catchAsyncError.js";
import ErrorHandler from "./middleware/errorMiddleware.js";

// cloudinary setup use documentation
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get(
  "/",
  catchAsyncError((req, res) => {
    try {
      res.status(200).send("Server is running...");
      // backend done
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server error",
      });
      return next(new ErrorHandler("Internal Server error", 500));
    }
  })
);

// server listen port
app.listen(process.env.PORT, () => {
  console.log("server running on port http://localhost:4000");
});
