import React, { useState } from "react";
import InputField from "../../components/InputField";
import Toast from "../../components/Toast";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useRegistrationMutation } from "../../feature/auth/authApi";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [disable, setDisable] = useState(false);

  const [registration, {isLoading, isSuccess}] = useRegistrationMutation();

  const env = import.meta.env.VITE_CLOUDINARY_ENV;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create user data object
    const userData = {
      userName,
      fullName,
      email,
      password,
      profileUrl,
    };
    const response = await registration(userData).unwrap();
   
    console.log({ response });
    console.log("User Data:", userData);
    alert("Registration successful! Check the console for user data.");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setDisable(true);
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "portfolio-build");
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${env}/image/upload`;
      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.secure_url) {
        setProfileUrl(data.secure_url);
        Toast(true, "Uploaded successfully");
      }
    } catch (error) {
      Toast(false, error.message);
    } finally {
      setUploading(false);
      setDisable(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Username"
            value={userName}
            setValue={setUserName}
            placeholder="Enter your username"
          />
          <InputField
            label="Full Name"
            value={fullName}
            setValue={setFullName}
            placeholder="Enter your full name"
          />
          <InputField
            type="email"
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder="Enter your email"
          />
          <InputField
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
          />
          <InputField
            label="Profile Image"
            type="file"
            setValue={handleImageUpload}
          />
          <Button
            disable={disable}
            title="Register"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all text-lg font-medium"
          />
        </form>
        <p className="text-center mt-6 text-base">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:text-blue-400">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
