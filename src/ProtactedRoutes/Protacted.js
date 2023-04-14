import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { toast } from "react-toastify";

const Protacted = (props) => {
  const Dashboard = props.component;
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
  if (isAuthenticated) {
    return <Dashboard />;
  } else {
    return <ErrorPage />;
  }
};

export default Protacted;
