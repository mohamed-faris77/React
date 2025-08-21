import React, { useState } from 'react'

const SimpleFormValidation = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name.trim()) {
      setError("Name is required");
    } else if (!email.includes("@")) {
      setError("Enter a valid email");
    } else {
      setError("");
      alert(`Form Submitted ✅\nName: ${name}\nEmail: ${email}`);
      // here you can send data to backend
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <p>{error}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleFormValidation
