import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Toast from "../../components/Toast";
import { useLoginMutation } from "../../feature/auth/authApi";
import { loginSuccess } from "../../feature/auth/authSlice";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      userName,
      email,
      password,
    };

    try {
      const response = await login(loginData).unwrap();
      loginSuccess(response.user);
      Toast(true, "Login successful");
      navigate("/");
    } catch (error) {
      Toast(false, error.data.message);
    }
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

          <Button disable={isLoading} title="Login" className={"w-full bg-blue-400"} shadowColor="#136cf1" />
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
