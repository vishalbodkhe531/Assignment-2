import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
// const Login = lazy(() => import("@/pages/auth/Login"));

function App() {
  return (
    <Router>
      {/* <Suspense fallback={"Loading..."}> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      {/* </Suspense> */}
      {/* <Toaster position="bottom-center" /> */}
    </Router>
  );
}

export default App;
