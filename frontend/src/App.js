import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
        
        </Route>

        <Route path="/" element={<Login />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
