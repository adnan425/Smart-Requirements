import React from "react";

const Input = ({ tag ="input", name, value, label, placeholder="", type = "text",  error, onChange , classes = ""}) => {
  const Tag = tag;
  return (
    <div className={`form-group mb-3 ${classes}`}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Tag
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        className="form-control"
        onChange={onChange}
      />
      {error && <small className="small  text-danger ">{error}</small>}
    </div>
  );
};

export default Input;
