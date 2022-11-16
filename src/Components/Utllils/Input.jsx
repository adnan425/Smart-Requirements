import React from "react";

const  Input = ({ name, value, label, type = 'text', error, onChange }) =>{
  return (
    <div class="form-group mb-3">
      <label htmlFor={name} class="form-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value} 
        class="form-control "
        name={name}
        // onClick={onChange}
      />
      {error && <small class="small  text-danger ">{error}</small>}
    </div>
  );
}

export default Input;