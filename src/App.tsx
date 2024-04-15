import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import Main   from "./pages/main";
import {router}   from "./routes/mainRoute";




function App() {
  return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}



export default App;
