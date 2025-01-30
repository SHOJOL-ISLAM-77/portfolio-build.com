import React, { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

const Login = () => {
  // State for form fields
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create login data object
    const loginData = {
      userName,
      email,
      password,
    };

    // Display the login data (you can replace this with an API call)
    console.log("Login Data:", loginData);
    alert("Login successful! Check the console for login data.");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField label="Username" value={userName} setValue={setUserName} placeholder="Enter your username" />
          <InputField type="email" label="Email" value={email} setValue={setEmail} placeholder="Enter your email" />
          <InputField
            type="password"
            field="password"
            label="Password"
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
          />

          <Button title="Login" className={"w-full bg-blue-400"} shadowColor="#136cf1" />
        </form>

        <p className="text-center mt-8 text-lg">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:text-blue-400">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
