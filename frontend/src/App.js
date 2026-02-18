import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellerDashboard from "./pages/SellerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Bill from "./pages/Bill";
import "./App.css";

const isLoggedIn = () => localStorage.getItem("token");
const getRole = () => localStorage.getItem("role");

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route
          path="/"
          element={
            isLoggedIn()
              ? getRole() === "seller"
                ? <Navigate to="/seller" />
                : <Navigate to="/customer" />
              : <Navigate to="/login" />
          }
        />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={!isLoggedIn() ? <Login /> : <Navigate to="/" />}
        />

        <Route
          path="/signup"
          element={!isLoggedIn() ? <Signup /> : <Navigate to="/" />}
        />

        {/* Seller */}
        <Route
          path="/seller"
          element={
            isLoggedIn() && getRole() === "seller"
              ? <SellerDashboard />
              : <Navigate to="/login" />
          }
        />

        {/* Customer */}
        <Route
          path="/customer"
          element={
            isLoggedIn() && getRole() === "customer"
              ? <CustomerDashboard />
              : <Navigate to="/login" />
          }
        />

        {/* Bill */}
        <Route
          path="/bill"
          element={
            isLoggedIn() && getRole() === "customer"
              ? <Bill />
              : <Navigate to="/login" />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



