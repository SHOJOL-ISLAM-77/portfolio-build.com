import React, { useEffect, useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Toast from "../../components/Toast";
import { useCheckUserNameMutation, useRegistrationMutation } from "../../feature/auth/authApi";
import { loginSuccess } from "../../feature/auth/authSlice";
import handleImageUpload from "../../utils/handleImageUpload";
import useDebounce from "../../utils/useDebounce";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const debouncedUserName = useDebounce(userName, 700);
  const [registration, { isLoading }] = useRegistrationMutation();
  const [userNameAvailable, setUserNameAvailable] = useState(null);
  const [checkUserName, { isLoading: isChecking }] = useCheckUserNameMutation();

  useEffect(() => {
    const checkAvailability = async () => {
      if (debouncedUserName.trim() !== "") {
        try {
          const response = await checkUserName({ userName: debouncedUserName }).unwrap();
          setUserNameAvailable(response.message);
          if (response.message === "Username Already Taken") {
            setUploading(true);
          } else {
            setUploading(false);
          }
        } catch (error) {
          Toast(false, "Error checking username:", error);
        }
      } else {
        setUserNameAvailable(null);
        setUploading(false);
      }
    };

    checkAvailability();
  }, [debouncedUserName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userName,
      fullName,
      email,
      password,
      profileUrl,
    };
    try {
      const res = await registration(userData).unwrap();
      navigate("/");
      loginSuccess(res.data);
    } catch (error) {
      Toast(true, error.message);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField label="Username" value={userName} setValue={setUserName} placeholder="Enter your username" />
          <p className="flex justify-start items-center -mt-6 gap-2">
            {userNameAvailable && userNameAvailable}
            {isChecking && <FaCircleNotch className="animate-spin" />}
          </p>
          <InputField label="Full Name" value={fullName} setValue={setFullName} placeholder="Enter your full name" />
          <InputField type="email" label="Email" value={email} setValue={setEmail} placeholder="Enter your email" />
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
            setValue={(e) => handleImageUpload(e, setUploading, setProfileUrl)}
          />
          <Button
            disable={uploading || isLoading}
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
