import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import "../styles/dashboard.css";
import {UserContext} from '../utils/UserContext';
import LoaderComp from "../components/LoaderComp";
import { LoadingContext } from "../utils/LoadingContext";

export default function Dashboard() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const {user} = useContext(UserContext)
  const navigate =  useNavigate()
  if(!user){
    navigate('/login');
  }
  // let value;
  const [value, setValue] = useState([])
  useEffect(()=>{}, [isLoading , value])

  return (
    <>
      {isLoading ? (
        <LoaderComp />
      ) : (
        <>
          <div className="dashboard">
            <h1 className="header">Hi, Welcome Back</h1>

            <DashboardLayout value={value} setValue ={setValue} />
          </div>
        </>
      )}
    </>
  );
}
