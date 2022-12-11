import React, { useEffect, useState } from "react";
import Header from "../Utllils/Header";
import Leftbar from "./Sidebar/Leftbar";
import {Outlet} from "react-router-dom";  

export default function Admin() {
 

  return (
    <>
      <Leftbar />
      <div className="main-content position-relative">
        <Header />
        <Outlet />
        {/* render components */}
      </div>
    </>
  );
}
