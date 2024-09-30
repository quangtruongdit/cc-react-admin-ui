import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Orders from "./pages/orders/Orders";
import Posts from "./pages/posts/Posts";
import UnknownError from "./pages/errors/UnknownError";
import NotFound from "./pages/errors/NotFound";
import "./styles/global.scss";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import store from "./redux/store";
import { Provider } from "react-redux";
import DemoPage from "./pages/demo/DemoPage";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AuthProvider } from "./providers/AuthProvider";
import AuthenticatedRoute from "./components/auth/AuthenticationRoute";
import ForgotPassword from "./pages/auth/forgotpassword/ForgotPassword";
import VerifyCode from "./pages/auth/verify/VerifyCode";
import { ErrorProvider } from "./providers/ErrorProvider";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div>
        <div className="main">
          <Navbar />
          <div className="container">
            <div className="menuContainer">
              <Menu />
            </div>
            <div className="contentContainer">
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </div>
          </div>
        </div>
        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <AuthenticatedRoute element={<Home />} />,
        },
        {
          path: "/users",
          element: <AuthenticatedRoute element={<Users />} />,
        },
        {
          path: "/products",
          element: <AuthenticatedRoute element={<Products />} />,
        },
        {
          path: "/users/:id",
          element: <AuthenticatedRoute element={<User />} />,
        },
        {
          path: "/products/:id",
          element: <AuthenticatedRoute element={<Product />} />,
        },
        {
          path: "/orders",
          element: <AuthenticatedRoute element={<Orders />} />,
        },
        {
          path: "/posts",
          element: <AuthenticatedRoute element={<Posts />} />,
        },
        {
          path: "/demo",
          element: <DemoPage />
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/verify",
      element: <VerifyCode />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <Provider store={store}>
      <ErrorBoundary fallback={<UnknownError />}>
        <ThemeProvider>
          <ErrorProvider>
            <AuthProvider>
              <div>
                <RouterProvider router={router} />
              </div>
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
