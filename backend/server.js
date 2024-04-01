// using module type then must be required full path include file extension like .js,.html
import app from "./app.js";

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(process.env.PORT, () => {
  console.log("server running on port http://localhost:4000");
});
