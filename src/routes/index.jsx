import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import Mesas from "../pages/Mesas";
import MesaDetalle from "../pages/MesaDetalle";
import Sincronizacion from "../pages/Sincronizacion";
import Productos from "../pages/Productos";
import Perfil from "../pages/Perfil";
import Terminos from "../pages/Terminos";
import Configuracion from "../pages/Configuracion";
import Logout from "../pages/Logout";

const Routes = () => {
  const { token } = useAuth();

  // Rutas publicas
  const routesForPublic = [
    {
      path: "/servicios",
      element: <div>Service Page</div>,
    },
    {
      path: "/nosotros",
      element: <div>About Us</div>,
    },
  ];

  // Rutas solo para usuarios autenticados
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "mesas",
          element: <Mesas/>,
        },
        {
          path: "/mesa/:id",
          element: <MesaDetalle/>,
        },
        {
          path: "/sincronizacion",
          element: <Sincronizacion/>,
        },
        {
          path: "/productos",
          element: <Productos/>,
        },
        {
          path: "/terminos",
          element: <Terminos/>,
        },
        {
          path: "/perfil",
          element: <Perfil/>,
        },
        {
          path: "/configuracion",
          element: <Configuracion/>,
        },
        {
          path: "/logout",
          element: <Logout/>,
        },
      ],
    },
  ];

  // Rutas para usuarios pero no autenticados
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <div>Home Page</div>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
