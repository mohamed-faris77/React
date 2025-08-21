import React, { useState } from "react";
// React Arrow Function Component (rafce)
const RegisterForm = () => {
  // Form data state (stores input values)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // Error messages state
  const [errors, setErrors] = useState({});
  // 🔹 Handle input change
  // Updates state whenever the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // 🔹 Validation function
  const validate = () => {
    let tempErrors = {}; // store all validation errors
    let isValid = true;
    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
      isValid = false;
    }
    // Password validation (min 6 chars)
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }
    // Confirm password validation (must match password)
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }
    // Update error state
    setErrors(tempErrors);
    return isValid;
  };
  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    if (validate()) {
      alert("Form submitted successfully ✅");
      // Reset form fields after success
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lgbg-white">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      {/* 🔹 Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
          {/* Error message */}
          {errors.name && <p className="text-dangertext-sm">{errors.name}</p>}
        </div>
        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-dangertext-sm">{errors.email}</p>}
        </div>
        {/* Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 chars)"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-sm text-danger">{errors.password}</p>
          )}
        </div>
        {/* Confirm Password Input */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className=" text-smtext-danger">{errors.confirmPassword}</p>
          )}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-dark text-white p-2 roundedhover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;