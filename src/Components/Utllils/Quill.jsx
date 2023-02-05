import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import classnames from 'classnames';

const Quill =  React.memo(({ name = "", value = "", error, label = "", onChange }) => { 
    // console.log("Quill value: ", value);
    return (
      <div className={classnames("form-group", "mb-3")}>
        {label ? <label htmlFor={name} className={classnames("form-label", error && "text-danger")}>{label}</label> : null}
        <ReactQuill name={name} theme="snow" value={value} onChange={onChange} />
        {error && <small className="text-danger">{error}</small>}
      </div>
    );
});
export default Quill;
