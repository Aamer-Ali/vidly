import React from "react";

const Input = ({ name, label, value, type, error, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label input-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control "
        aria-describedby="emailHelp"
      />
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};

export default Input;
