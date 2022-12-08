import React, { useEffect, useState } from "react";
import Header from "../Utllils/Header";
import Leftbar from "./Sidebar/Leftbar";
import {Outlet} from "react-router-dom"; 
import auth from "../Services/authService";

export default function Admin() {
  const [user, setUser] = useState();

  useEffect(()=>{
    const { user } = auth.getCurrentUser();
    setUser(user);

  },[setUser]);

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
