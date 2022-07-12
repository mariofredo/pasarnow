import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  let auth = localStorage.getItem("access_token");
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default RequireAuth;
