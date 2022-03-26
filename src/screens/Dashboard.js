import React from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <h1 className="header">Hi, Welcome Back</h1>

        <DashboardLayout />
      </div>
    </>
  );
}
