import React from "react";

const Input = ({ name, value, label, type = "text", error, onChange}) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        className="form-control"
        onChange={onChange}
      />
      {error && <small className="small  text-danger ">{error}</small>}
    </div>
  );
};

export default Input;
