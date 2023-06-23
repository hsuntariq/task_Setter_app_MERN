const bcrypt = require("bcrypt");
const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Please enter name");
  }
  if (!email) {
    res.status(400);
    throw new Error("Please enter email");
  }
  if (!password) {
    res.status(400);
    throw new Error("Please enter password");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // check if user already exists

  const checkUser = await User.findOne({ email });
  if (checkUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  // create new User

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({
    _id:user._id,
    name,
    email,
    password: hashedPassword,
    token:generateToken(user._id)
  });
});

const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  if (!email) {
    res.status(400);
    throw new Error("Please enter email");
  }
  if (!password) {
    res.status(400);
    throw new Error("Please enter password");
  }

  // check if user exists or not

  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    res.status(404);
    throw new Error("No user found");
  }

  // compare email and password

  if (checkUser && (await bcrypt.compare(password, checkUser.password))) {
    res.json({
        _id:checkUser._id,
        name:checkUser.name,
        email:checkUser.email,
        token:generateToken(checkUser._id)

    });
  } else {
    res.status(404);
    throw new Error("Invalid Credentials");
  }
});

const getUser = (req, res) => {
  res.json({
    user: "Get User Data",
  });
};


// generate Token

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'});
}




module.exports = {
  loginUser,
  registerUser,
  getUser,
};
