import React from "react";
import Sidebar from '../../Utllils/Sidebar';
export default function Leftbar() {
  const adminPermissions = [
    {
      id: 1,
      icon: "ti ti-home",
      label: "Dashboard",
      path: "dashboard",
    },
    {
      id: 2,
      icon: "ti ti-users",
      label: "Users",
      path: "users",
    },
    {
      id: 3,
      icon: "ti ti-tools",
      label: "Projects",
      path: "projects",
    },
    {
      id: 4,
      icon: "ti ti-template",
      label: "SRS Template",
      path: "srs",
    },
    {
      id: 5,
      icon: "ti ti-headphones",
      label: "Suggestions",
      path: "suggestions",
    },
    {
      id: 6,
      icon: "ti ti-settings",
      label: "Settings",
      path: "settings",
    },
  ];
  return (
    <Sidebar items={adminPermissions} />
  );
}
