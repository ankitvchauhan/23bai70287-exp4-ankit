# Experiment 4 – React Multi Page Application with Context, Reducer & Memo

This project is an extension of Experiment 3.  
It demonstrates the use of:

- React Router (multi-page navigation)
- Context API (global state management)
- useReducer (structured state updates)
- useMemo (performance optimization)

---

## 📌 Project Theme
**Portfolio Website**

Pages:
- Home  
- Projects  
- Analytics (Experiment 4 Page)

---

## 🎯 Objectives

- Create multiple pages using React Router  
- Manage global state using Context API  
- Handle complex state using useReducer  
- Optimize derived calculations using useMemo  

---

## 🧩 Features

### React Router
Navigation between Home, Projects, and Analytics pages.

### Context API
Global state stores:
- Theme (light / dark)
- Favorite projects

### useReducer
Reducer actions:
- ADD_FAVORITE  
- REMOVE_FAVORITE  
- CLEAR_FAVORITES  

### useMemo
Used in Analytics page to calculate:
- Total number of favorite projects

---

## 📁 Folder Structure
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── HeroSection.jsx
│ ├── CardComponent.jsx
│ ├── ThemeToggle.jsx
│ └── FilterBar.jsx
│
├── context/
│ └── AppContext.jsx
│
├── reducer/
│ └── appReducer.js
│
├── pages/
│ ├── Home.jsx
│ ├── Projects.jsx
│ └── Analytics.jsx
│
├── App.jsx
├── main.jsx
└── index.css

---

## ⚙️ Technologies Used

- React (Vite)
- React Router DOM
- JavaScript
- CSS

---

## 🚀 Deployment : 
link : "23bai70287-exp4-ankit.vercep.app"

---

## ✅ Experiment 4 Requirements Checklist

- [x] React Router implemented  
- [x] 3 Pages  
- [x] useContext used  
- [x] useReducer with 3 actions  
- [x] useMemo implemented  
- [x] Clean UI  

---

## 👨‍🎓 Student Details

Name: Ankit  
UID: 23BAI70287  
Course: B.E - C.S.E{AIML}
Subject: Full Stack Development
