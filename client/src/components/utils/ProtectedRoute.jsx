import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoutes({ children }) {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/protected",
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      } catch (err) {
        console.error("Error during authentification check", err);
        setIsLogged(false);
      }
    };
    checkAuth();
  }, []);

  if (isLogged === null) {
    return <div> Loading... </div>;
  }

  return isLogged ? children : <Navigate to="/" replace />;
}
