import React,{useEffect} from "react";
import { BrowserRouter, Route, Routes , Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Kite from "./kite";

// --- 1. DEFINE PROTECTED ROUTE HERE ---
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  
  if (!isAuthenticated) {
    // Redirect to the OTHER project (Frontend) if not logged in
    // window.location.href = "http://localhost:5174/kite";
    // return null;
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}, []);
  // Logic to check if the user is authenticated
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return (
       <Routes>
        {/* 1. Public Route: Login Page */}
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" /> : <Kite />} 
        />
        {/* 2. Dashboard Route: If I am at /, show Home. If not, go to /login */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        />
        {/* 2. Protected Route: Home/Dashboard */}
        <Route 
          path="/*" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        />
       </Routes>
  );
}
export default App