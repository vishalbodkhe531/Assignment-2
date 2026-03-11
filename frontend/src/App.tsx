import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import VisitorList from "./pages/hr/VisitorList";
import MeetingStatusForm from "./pages/manager/MeetingStatusForm";

import { ToastContainer } from "react-toastify";
import AdminDashboard from "./pages/admin/AdminDashboard";
import SecurityDashboard from "./pages/security/SecurityDashboard";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* security routes */}
          <Route path="/security/dashboard" element={<SecurityDashboard />} />
          
          {/* manager routes */}
          <Route
            path="/manager/meeting-status"
            element={<MeetingStatusForm />}
          />
          <Route path="/hr/visitor-list" element={<VisitorList />} />

          {/* admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
