# MERN Stack Portfolio with Admin Panel

🚀 Excited to introduce the first-ever MERN STACK PORTFOLIO WITH ADMIN PANEL! Dive into the world of full-stack development with Node.js, Express, MongoDB, React, Redux Toolkit, Tailwind CSS, and ShadCN. With a robust backend and two distinct frontends for the portfolio and admin dashboard, you'll learn how to add, update, read, and delete projects, skills, applications, personal details, and manage messages seamlessly. Elevate your web development skills and empower your online presence with this comprehensive tutorial series. Don't miss out on unlocking the potential of your portfolio!

## Project Deployed

Check out the live project [here](https://fetouaki-younes.netlify.app/).

## Features

- **Portfolio Frontend**: Showcase your projects, skills, and personal details.
- **Admin Dashboard**: Manage your portfolio with ease, including CRUD operations for projects, skills, applications, and messages.
- **Full-Stack Implementation**: Backend powered by Node.js, Express, and MongoDB, with a modern frontend using React, Redux Toolkit, and Tailwind CSS.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

- **Frontend**:
  - React.js
  - Redux Toolkit
  - Tailwind CSS
  - ShadCN

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn
- MongoDB

### Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

   2. **Install backend dependencies**:
      ```
      cd backend
      npm install
      ```
   3. **Install frontend dependencies**:
      ```
      cd ../dashboard
      npm install
      ```
      ```
      cd ../portfolio
      npm install
      ```
  ### Configuration
  Backend:
    Create a .env file in the backend directory with the following content: <br>
    ```
    
          PORT=4000
          NODE_ENV=development
          MONGO_URI=your_mongo_uri
          PORTFOLIO_URL=http://localhost:5174
          DASHBOARD_URL=http://localhost:5173
          CLOUDINARY_API_KEY=your_cloudinary_api_key
          CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
          CLOUDINARY_API_SECRET=your_cloudinary_api_secret
          JWT_SECRET_KEY=your_jwt_secret_key
          JWT_EXPIRES=7d
          COOKIE_EXPIRES=7
          SMPT_HOST=your_smtp_host
          SMPT_PORT=your_smtp_port
          SMPT_SERVICE=your_smtp_service
          SMPT_MAIL=your_smtp_mail
          SMPT_PASSWORD=your_smtp_password
    ```
 # Running the Application

## Start the backend server:

```
cd backend
npm start
```
## Start the frontend development server:
```
cd dashboard
npm start
```
```
cd portfolio
npm start
```
# Access the application:

Portfolio: http://localhost:5174
Admin Panel: http://localhost:5173

# Deployment

For deployment, refer to the hosting provider's documentation. This project is deployed using Netlify for the frontend and a suitable backend hosting service like Heroku, Vercel, or your own server.

# Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgements

Thanks to the developers of the technologies used in this project.
Special thanks to the community for their continuous support and contributions.
