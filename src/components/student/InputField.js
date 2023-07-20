import React from "react";

const InputField = ({ label, type, placeholder, value, onChange, name }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={label}
        className="block text-gray-700 font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputField;
