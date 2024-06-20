import jwt from 'jsonwebtoken';

export const generateToken = (user, message, statusCode, res) => {
  console.log('JWT_SECRET:', process.env.JWT_SECRET_KEY); // Log the JWT_SECRET to verify

  if (!process.env.JWT_SECRET_KEY) {
    return res.status(500).json({
      success: false,
      message: 'JWT_SECRET is not defined in environment variables',
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    message,
    token,
    user,
  });
};
