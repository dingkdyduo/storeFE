 import {createBrowserRouter} from "react-router-dom"
 import ErrorPage from "../error-page";
 import MainPage from "../pages/main";
 import HomePageHero from "../pages/homePageHero";
 import Category from "../pages/category";
 import ProductPage from  "../pages/product";
 import About from  "../pages/about";
 import ContactUs from  "../pages/contactus";


  export const  router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children:[
         { index: true, path: "/", element: <HomePageHero />},
         { path: "/category", element: <Category />},
         { path: "/product", element: <ProductPage />},
         { path: "/about", element: <About />},
         { path: "/contactus", element: <ContactUs />},
      ]
    }
  ]);