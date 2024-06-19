import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/private/PrivateRoute.jsx";
import "./styles/index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";

// Lazy-loaded components
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Reports = React.lazy(() => import("./pages/Reports.jsx"));
const PageNotFound = React.lazy(() =>
  import("./components/NotFound/NotFound.jsx")
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            {/* Public Route - Login */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Private Routes */}
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/settings/*"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <Settings />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/reports/*"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <Reports />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            {/* Page Not Found */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
