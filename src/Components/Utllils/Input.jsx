import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const Input = ({ tag ="input", name, value, label, placeholder="", type = "text",  error, onChange , classes = ""}) => {
  const Tag = tag;
  return (
    <div className={`form-group mb-3 ${classes}`}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <GrammarlyEditorPlugin clientId={process.env.REACT_APP_GRAMMERLY_KEY}> 
      <Tag
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        className="form-control"
        onChange={onChange}
      />
      </GrammarlyEditorPlugin>
  
      {error && <small className="small  text-danger ">{error}</small>}
    </div>
  );
};

export default Input;
