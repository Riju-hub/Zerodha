const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if(!username || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ username });
    if(!user){
      return res.json({message:'Incorrect password or username' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or username' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: true,
     });
     res.status(201).json({ 
      message: "User logged in successfully",
      success: true,
      user: {
        username: user.username,
        email: user.email
      }
     });
     next()
  } catch (error) {
    console.error(error);
  }
};
// Inside your AuthController.js (or similar)
module.exports.ChangePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const token = req.cookies.token;

    if (!token) {
      return res.json({ message: "Unauthorized: No token provided", success: false });
    }

    // 1. Verify Token to get User ID
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) return res.json({ message: "Unauthorized: Invalid token",status: false });

      const user = await User.findById(data.id);
      if (!user) return res.json({ message: "User not found", success: false });

      // 2. Verify Current Password
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.json({ message: "Current password is incorrect", success: false });
      }

      // 3. Update Password
      // Because of your userSchema.pre("save") hook, 
      // simply assigning the plain text here will trigger a re-hash.
      user.password = newPassword;
      await user.save();

      res.status(200).json({ message: "Password updated successfully!", success: true });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};