import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import User from "./pages/user/User";
import EditUser from "./pages/user/EditUser";
import Pie from "./pages/Pie";
import Project from "./pages/project/Project";
import Role from "./pages/role/Role";
import AddUser from "./pages/user/AddUser"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/users" element={<User />} />
          <Route exact path="/edituser/:id" element={<EditUser />}></Route>
          <Route exact path="/pie" element={<Pie />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/role" element={<Role />} />
          <Route exact path="/adduser" element={<AddUser />} />
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
