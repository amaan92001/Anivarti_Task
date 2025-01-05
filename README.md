
# Anivarti Community Website

Welcome to the **Anivarti Community Website**! This full-stack application was built using the **MERN Stack** (MongoDB, Express, React, Node.js) to provide a platform for community members to interact, register, and log in.

### [Live Demo](https://anivarti-task.vercel.app/)

---

## **Table of Contents:**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [License](#license)

---

## **Project Overview**
The Anivarti Community Website aims to provide a seamless user experience for members to register, log in, and view a directory of all community members. The backend is built using **Node.js** and **Express**, while the frontend is built with **React**. The application is connected to a **MongoDB** database to store member details.

### **Key Features:**
- **Members Directory:** Displays a list of all registered members with their details.
- **Members Registration:** Allows new users to sign up with a name, email, and password.
- **Members Login:** Allows registered members to log in with their email and password.

---

## **Features**

### 1. **Member Registration**
- New users can register by providing their name, email, and password.
- Passwords are securely stored (hashed) in the database for enhanced security.
  
### 2. **Member Login**
- Registered members can log in with their email and password.
- If the credentials match, the user is granted access to the site.

### 3. **Member Directory**
- A directory displaying all registered members with their names and emails.
- The directory can be viewed by all members who are logged in.

---

## **Technologies Used**

- **Frontend:**
  - **React.js**: For building the user interface.
  - **Axios**: For making HTTP requests to the backend API.
  - **CSS**: For styling the frontend.

- **Backend:**
  - **Node.js**: The runtime environment for running JavaScript on the server.
  - **Express.js**: The web application framework for building the REST API.
  - **MongoDB**: The NoSQL database used for storing member data.
  - **Mongoose**: The ODM library for MongoDB, used to interact with the database.

- **Deployment:**
  - **Vercel**: Deployed the frontend on Vercel for continuous deployment.
  - **MongoDB Atlas**: Hosted the database on MongoDB Atlas for cloud storage.
  
---

## **Installation**

To run this project locally, follow the steps below:

### 1. **Clone the Repository:**

```bash
git clone https://github.com/amaan92001/Anivarti_Task.git
cd Anivarti_Task
```

### 2. **Backend Setup (Node.js/Express):**

#### Navigate to the backend folder:

```bash
cd backend
```

#### Install the backend dependencies:

```bash
npm install
```

#### Create a `.env` file in the `backend` directory:

```bash
touch .env
```

Inside the `.env` file, add your MongoDB connection string:

```
MONGO_URI=your_mongo_connection_string
PORT=5000
```

#### Start the backend server:

```bash
npm start
```

Your backend server will now be running on [http://localhost:5000](http://localhost:5000).

### 3. **Frontend Setup (React):**

#### Navigate to the frontend folder:

```bash
cd frontend
```

#### Install the frontend dependencies:

```bash
npm install
```

#### Start the frontend React development server:

```bash
npm run dev
```

Your frontend will now be running on [http://localhost:3000](http://localhost:3000).

---

## **Usage**

### **1. Registering a Member:**
- Visit the registration page, fill out the form with your name, email, and password, and click on "Register."
- Your details will be saved to the MongoDB database, and you will receive a confirmation message.

### **2. Logging In:**
- After registering, navigate to the login page and enter your registered email and password.
- If the credentials match, you will be logged in and redirected to the members directory.

### **3. Members Directory:**
- Once logged in, you can view the list of all members in the community.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Contact**

- **Amaan Abdulnabi Patel**  
  [GitHub](https://github.com/amaan92001)  
  [LinkedIn](https://www.linkedin.com/in/amaan-patel-a12b92275/)

---

### **Acknowledgments:**
- Thanks to **MongoDB**, **Express**, **React**, and **Node.js** for providing a fantastic stack to build full-stack applications.
- Special thanks to **Vercel** for easy deployment of the frontend.
