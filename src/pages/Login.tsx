import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !companyName) {
      toast.error("Please fill all the details");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (companyName.trim().length < 2) {
      toast.error("Company name must be at least 2 characters");
      return;
    }

    if (
      email === "test@gmail.com" &&
      password === "123456" &&
      companyName === "test company"
    ) {
      localStorage.setItem("loggedIn", "true");
      toast.success("Login successful");
      navigate("/users");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="container  justify-content-center align-items-center vh-100 mt-5">
      <div className="card p-4 style={{ width: '100%', maxWidth: '400px' }}">
        <h2 className="text-center mb-4">Login form</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Company name</label>
            <input
              type="text"
              className="form-control"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <p className="text-center">
        Email: test@gmail.com Password: 123456 Company name: test company
      </p>
    </div>
  );
};

export default Login;
