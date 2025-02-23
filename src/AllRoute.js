import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";

// Lazy Loading (Code Splitting)
const Dashboard = lazy(() => import("./Dashboard"));
const NotFound = lazy(() => import("./NotFound"));

// Simulated Authentication
const isAuthenticated = true; // Change to `false` to see redirection

// Protected Route
const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Dynamic Route Component
const UserProfile = () => {
  const { id } = useParams();
  return <h2>User Profile ID: {id}</h2>;
};

// Dashboard Layout with Nested Routes
const DashboardLayout = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
};

// Main App Component
const AllRoute = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Basic Route */}
          <Route path="/" element={<h2>Home Page</h2>} />

          {/* Dynamic Route */}
          <Route path="/user/:id" element={<UserProfile />} />

          {/* Nested Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<h3>Dashboard Overview</h3>} /> {/* Index Route */}
            <Route path="profile" element={<h3>Profile Page</h3>} />
            <Route path="settings" element={<h3>Settings Page</h3>} />
          </Route>

          {/* Redirect Route */}
          <Route path="/old-dashboard" element={<Navigate to="/dashboard" />} />

          {/* Lazy Loaded Route */}
          <Route path="/lazy" element={<Dashboard />} />

          {/* 404 Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AllRoute;
