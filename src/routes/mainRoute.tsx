 import {createBrowserRouter} from "react-router-dom"
 import ErrorPage from "../error-page";
 import MainPage from "../pages/main";
 import HomePageHero from "../pages/homePageHero";
 import Category from "../pages/category";
 import ProductPage from  "../pages/product";
 import About from  "../pages/about";
 import ContactUs from  "../pages/contactus";
 import Login from  "../pages/login";
 import Dashboard from  "../pages/dashboard";

  export const  router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children:[
         { index: true, path: "/", element: <HomePageHero />},
         { path: "/category/:CategoryName", element: <Category />},
         { path: "/:product/:sku", element: <ProductPage />},
         { path: "/about", element: <About />},
         { path: "/contactus", element: <ContactUs />},
         { path: "/login", element: <Login />},
         { path: "/dashboard", element: <Dashboard />},
      ]
    }
  ]);