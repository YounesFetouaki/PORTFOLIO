import { generateToken } from "../utils/jwtToken.js";

/* const dotenv = require('dotenv');

dotenv.config(); */

const payload = {
  id: '66723143970579c658185ba3', // Replace with actual user id
  email: 'fetouakiyounes65@gmail.com', // Replace with actual user email
};

const secretKey = process.env.JWT_SECRET; // Ensure this is set in your .env file
const options = {
  expiresIn: '7d', // Token expiration time
};

if (!secretKey) {
  console.error('JWT_SECRET is not defined in the environment variables');
  process.exit(1);
}

const token = jwt.sign(payload, secretKey, options);

console.log('Generated JWT:', token);
