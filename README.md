# 🧬 Pathology Management System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** application for managing pathology lab operations such as patient registration, billing, report generation, and test management.  
The project features **JWT authentication**, **admin panel**, and a modern responsive frontend built with React.js.

---

## 🚀 Tech Stack

### **Frontend**
- React.js (Vite)
- React Router DOM
- Context API
- Axios
- HTML5, CSS3
- Custom CSS Modules

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- bcrypt.js for password hashing

---

## ⚙️ Features

✅ Secure JWT-based authentication system  
✅ Admin dashboard to manage users, billing, and reports  
✅ Patient and test data management (Normal & Advanced tests)  
✅ Billing and PDF report generation  
✅ Responsive UI and modular component structure  
✅ RESTful API integration between frontend and backend  
✅ Middleware-based route protection  

---

## 🧠 Authentication Flow

1. **User Login/Register** → Data sent to backend using Axios  
2. **JWT Token Generation** → Server verifies credentials  
3. **Token Storage** → Stored securely in browser localStorage  
4. **Protected Routes** → Accessible only with valid token  
5. **Admin Access** → Verified via admin middleware  

---


## 🧠 git clone https://github.com/shivam-75/pathology-project.git
## 🧠 Demo https://pathology-project-h8k5.vercel.app
**cd pathology-project**

## Access Admin Panel
**admin Email : shivam6386000621@gmail.com**
**admin password : 123456789**



## 📂 Project Structure
```
shivam-75-pathology-project/
│
├── backend/
│ ├── package-lock.json
│ ├── package.json
│ ├── server.js
│ ├── .gitignore
│ └── src/
│ ├── admin/
│ │ ├── adminbillin.route.js
│ │ ├── adminBilling.controller.js
│ │ └── billing.model.js
│ ├── controllers/
│ │ ├── test.controller.js
│ │ └── user.controller.js
│ ├── database/
│ │ └── database.js
│ ├── middlewares/
│ │ ├── admin.middleware.js
│ │ ├── auth-validator.middleware.js
│ │ └── auth.middleware.js
│ ├── model/
│ │ ├── advanceTest.model.js
│ │ ├── normalTest.model.js
│ │ └── user.model.js
│ ├── routes/
│ │ ├── test.route.js
│ │ └── user.route.js
│ └── validator/
│ └── validator.js
│
├── frontend/
│ ├── README.md
│ ├── eslint.config.js
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── vite.config.js
│ ├── .gitignore
│ ├── public/
│ └── src/
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ ├── assets/
│ │ └── frontend_assets/
│ │ └── assets.js
│ ├── components/
│ │ ├── admin/Admin.jsx
│ │ ├── apform/Apform.jsx
│ │ ├── Billingform/FormBilling.jsx
│ │ ├── billpdf/Billpdf.jsx
│ │ ├── error/Error.jsx
│ │ ├── footer/Fotter.jsx
│ │ ├── header/Header.jsx
│ │ ├── loginpop/Login.jsx
│ │ ├── loginpop/registration.jsx
│ │ ├── machine_img/Machineimg.jsx
│ │ ├── Navbar/Navbar.jsx
│ │ ├── search/Serach.jsx
│ │ ├── table/Usertable.jsx
│ │ ├── tests/Tests.jsx
│ │ ├── time/time.jsx
│ │ └── viralDease/Viraldeases.jsx
│ ├── css/
│ │ ├── apform.css
│ │ ├── billpdf.css
│ │ ├── error.css
│ │ ├── footer.css
│ │ ├── formBilling.css
│ │ ├── header.css
│ │ ├── login.css
│ │ ├── loginpop.css
│ │ ├── machineimg.css
│ │ ├── navbar.css
│ │ ├── search.css
│ │ ├── service.css
│ │ ├── tests.css
│ │ ├── usertable.css
│ │ └── viraldeases.css
│ ├── pages/
│ │ ├── Apointment/Appointment.jsx
│ │ ├── Billing/Billing.jsx
│ │ ├── home/Home.jsx
│ │ ├── search/SearchBar.jsx
│ │ ├── services/Service.jsx
│ │ └── Signup/signup.jsx
│ └── store/
│ └── StoreContext.jsx
│
└── README.md
```

