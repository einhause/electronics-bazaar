import asyncHandler from 'express-async-handler'; //middleware for async error handling, avoid trycatching
import User from '../models/userModel.js';

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  }
  //Invalid credentials
  res.status(401);
  throw new Error('Invalid credentials!');
});

export { authUser };
