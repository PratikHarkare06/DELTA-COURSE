import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "Pratik",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Username */}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />

      {/* Full Name */}
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <br />

      {/* Password */}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
