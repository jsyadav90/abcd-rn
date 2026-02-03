import { getAccessToken } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const token = getAccessToken();

  if (!token) {
    // Hard redirect to static login page
    window.location.replace("/login.html");
    return null;
  }

  return children;
};

export default ProtectedRoute;
