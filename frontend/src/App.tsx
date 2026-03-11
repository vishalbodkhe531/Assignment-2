import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import VisitorList from "./pages/hr/VisitorList";
import MeetingStatusForm from "./pages/manager/MeetingStatusForm";
import VisitorInForm from "./pages/security/VisitorInForm";
import VisitorOutForm from "./pages/security/VisitorOutForm";

import { ToastContainer } from "react-toastify";
import AdminDashboard from "./pages/admin/AdminDashboard";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/security/visitor-in" element={<VisitorInForm />} />
          <Route path="/security/visitor-out" element={<VisitorOutForm />} />

          <Route
            path="/manager/meeting-status"
            element={<MeetingStatusForm />}
          />
          <Route path="/hr/visitor-list" element={<VisitorList />} />

          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
