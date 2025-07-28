# 📝 Notes Manager App

A simple web-based notes application built with **Node.js**, **Express**, and **EJS**. This app allows users to create, edit, and manage notes stored as files using the native **File System module**. The application also supports dynamic routing for editing specific notes.

---

## 🚀 Features

- Create new notes with custom filenames
- Edit existing notes (both name and content)
- Dynamically route to individual note pages
- Data saved directly to the server's file system
- Clean and simple EJS-based frontend

---

## 📁 Project Structure
project/
├── views/ # EJS templates
├── public/ # Static assets (CSS, images, etc.)
├── file/ # Directory where notes are stored as text files
├── app.js # Main server file
└── package.json


## ⚙️ Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- File System (fs module)

---

## 📌 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2.  Install dependencies
     npm install
3.  Start the server
        node app.js  
4.  Visit in browser
        http://localhost:3000

🧠 About
  This project was built to practice:

  File handling using Node.js

  Working with dynamic routes in Express

  Building views using EJS

  Managing CRUD operations without a database
