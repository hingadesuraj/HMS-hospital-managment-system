export const generateToken = async (user, message, stausCode, res) => {
  const token = await user.generateJsonWebToken();
//   console.log(token)
  const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";
  res
    .status(stausCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ) ,
      httpOnly:true
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
  //cookie (nameof cookie , token , expires)
};
