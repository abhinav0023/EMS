import React from "react";
import Header from "../Stuff/Header";
import CreateTask from "../Stuff/CreateTask";
import AllTask from "../Stuff/AllTask";

function AdminDashboard() {
  return (
    <>
      <Header />
      <CreateTask />
      <AllTask/>
    </>
  );
}

export default AdminDashboard;
