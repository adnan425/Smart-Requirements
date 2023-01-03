import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = ({ name="", value, error, onChange }) => {

    return (
        <div className={`form-group mb-3 ${''}`}>

            <ReactQuill name={name} theme="snow" value={value} onChange={onChange} />
            {error && <small className="small  text-danger ">{error}</small>}
        </div>
    );
};

export default Quill;
