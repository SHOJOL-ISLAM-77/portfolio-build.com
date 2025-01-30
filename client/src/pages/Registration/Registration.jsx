import React, { useState } from "react";
import InputField from "../../components/InputField";
import Toast from "../../components/Toast";

const Registration = () => {
  // State for form fields
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const env = import.meta.env.VITE_CLOUDINARY_ENV;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user data object
    const userData = {
      userName,
      fullName,
      email,
      password,
      profileImage,
    };

    console.log("User Data:", userData);
    alert("Registration successful! Check the console for user data.");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
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
        setProfileImage(data.secure_url);
        Toast(true, "Uploaded successfully");
      }
    } catch (error) {
      Toast(false, error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <InputField label="Username" value={userName} setValue={setUserName} placeholder="Enter your username" />
          <InputField label="Full Name" value={fullName} setValue={setFullName} placeholder="Enter your full name" />
          <InputField type="email" label="Email" value={email} setValue={setEmail} placeholder="Enter your email" />
          <InputField
            type="password"
            field="password"
            label="Password"
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
          />

          <InputField
            label="Profile Image"
            type="file"
            setValue={handleImageUpload}
            placeholder="Select Your Profile Image"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition-colors text-lg">
            Register
          </button>
        </form>

        <p className="text-center mt-8 text-lg">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:text-blue-400">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
