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
import { store } from "./store";
import { Provider } from "react-redux";
import DemoPage from "./pages/demo/DemoPage";
import { ThemeProvider } from "./providers/ThemeProvider";

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
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/posts",
          element: <Posts />
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
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <Provider store={store}>
      <ErrorBoundary fallback={<UnknownError />}>
        <ThemeProvider>
          <div>
            <RouterProvider router={router} />
          </div>
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
