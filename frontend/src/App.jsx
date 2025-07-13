import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserProvider from "./context/UserProvider";
import { Dashboard } from "./pages/Dashboard";
import EditResume from "./components/EditResume";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume/:resumeId" element={<EditResume />} />
      </Routes>

      <Toaster
        toasterOption={{
          className: "",
          style: {
            frontSize: "13px",
          },
        }}
      ></Toaster>
    </UserProvider>
  );
}

export default App;
