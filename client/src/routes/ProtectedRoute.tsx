//checks if token exists if not return to login page
import type { ReactNode } from "react"; 
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode; 
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>; 
}