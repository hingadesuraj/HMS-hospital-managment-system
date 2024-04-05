// using module type then must be required full path include file extension like .js,.html
import app from "./app.js";
import cloudinary from "cloudinary";

// cloudinary setup use documentation
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.get("/", (req, res) => {
  res.send("Server is running...");
  // backend done
});


// server listen port
app.listen(process.env.PORT, () => {
  console.log("server running on port http://localhost:4000");
});
