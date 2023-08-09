import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";


export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth0();
  let location = useLocation();

  return isAuthenticated ? children : <Navigate to='/' state={{ from: location }} replace />

}
