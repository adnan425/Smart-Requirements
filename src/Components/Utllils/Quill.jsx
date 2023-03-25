import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import classnames from 'classnames';
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const Quill =  React.memo(({ name = "", value = "", error, label = "", onChange }) => { 
    // console.log("Quill value: ", value);
    return (
      <GrammarlyEditorPlugin clientId={process.env.REACT_APP_GRAMMERLY_KEY}>     
      <div className={classnames("form-group", "mb-3")}>
        {label ? <label htmlFor={name} className={classnames("form-label", error && "text-danger")}>{label}</label> : null}
        <ReactQuill name={name} theme="snow" value={value} onChange={onChange} />
        {error && <small className="text-danger">{error}</small>}
      </div>
      </GrammarlyEditorPlugin>
    );
});
export default Quill;
