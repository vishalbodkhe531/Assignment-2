import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";

import { ToastContainer } from "react-toastify";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Home from "./pages/Home/Home";
import SecurityDashboard from "./pages/security/SecurityDashboard";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* this route for Security,Manager,HR 1st admin create role , after get pass from admin then login */}
          <Route path="/login" element={<Login />} /> 

          <Route path="/security/dashboard" element={<SecurityDashboard />} />


          {/* admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
