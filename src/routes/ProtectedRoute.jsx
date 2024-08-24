import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  // Validar si el usuario esta autenticado
  if (!token) {
    // Si no está autenticado, redireccionar a la página de Login
    return <Navigate to="/login" />;
  }

  // Si está autenticado, redireccionar a las rutas
  return <Outlet />;
};
