import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ label, value, setValue, placeholder, type: t = "text", field = "input" }) => {
  const [type, setType] = useState(t);
  return (
    <div>
      <label className="block text-lg font-medium mb-2">{label}</label>
      <div className="relative">
        <input
          accept={type === "file" ? "image/*" : ""}
          type={t == "password" ? type : t}
          placeholder={placeholder}
          value={value}
          onChange={type == "file" ? setValue : (e) => setValue(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none text-lg"
          required
        />
        {t === "password" && (
          <div
            onClick={() => {
              setType(type === "password" ? "text" : "password");
            }}>
            {type === "password" ? (
              <FaEye className="absolute transform cursor-pointer -translate-y-9 size-6 right-4" />
            ) : (
              <FaEyeSlash className="absolute transform cursor-pointer -translate-y-9 size-6 right-4" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
