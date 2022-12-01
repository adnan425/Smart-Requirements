import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toaster({ type = "info", message , icon:myIcon = ""}) {
  console.log(message);
  return (
    <>
    {/* For Customization of this:  https://fkhadra.github.io/react-toastify/migration-v8 */}

      {toast( message)}
      {/* {toast( message, { icon: (myIcon === "") ? false : myIcon })} */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        // hideProgressBar={false} 
        closeOnClick 
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="colored" // dark , light
      />
    </>
  );
};

export default Toaster;
