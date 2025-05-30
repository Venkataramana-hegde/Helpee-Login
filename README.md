# 🧑‍💻 Internship Assessment — React + TypeScript

This is a simple web application built using **React**, **TypeScript**, and **Bootstrap** as part of an internship selection process. The project includes a login screen with validation and a post-login view displaying a list of users with infinite scrolling.

---

## 🚀 Features

### 🔐 Login Page
- Form with 3 fields:
  - **Email**
  - **Password**
  - **Company Name**
- Basic input validation:
  - All fields required
  - Email must include `@` and `.`
  - Password must be at least 6 characters
  - Company name must be at least 2 characters
- Hardcoded credentials:
  - `Email: test@gmail.com`
  - `Password: 123456`
  - `Company: test company`
- On successful login:
  - Navigates to the user list page
  - Stores login state in `localStorage`
- On failed login:
  - Displays error toast using `react-toastify`

---

### 👥 User List Page
- Protected route:
  - Redirects to login if not logged in
- Displays a list of users fetched from `https://jsonplaceholder.typicode.com/users`
- **Infinite scroll**:
  - Loads 10 users at a time as the user scrolls
- **Spinner** shown while loading more users
- **Logout button**:
  - Clears login state
  - Redirects back to login screen

---

## 🧱 Tech Stack

- React
- Typescript
- Bootstrap
- React-router-dom
- Axios
- React-Toastify

---

## 🛠️ Installation & Running Locally

```bash
git clone https://github.com/Venkataramana-hegde/Helpee-Login.git
cd Helpee-login
npm install
npm run dev
