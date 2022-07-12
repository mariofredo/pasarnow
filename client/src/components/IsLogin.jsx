import { Navigate } from "react-router-dom";
function IsLogin({ children }) {
  let auth = localStorage.getItem("access_token");
  if (auth) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default IsLogin;
