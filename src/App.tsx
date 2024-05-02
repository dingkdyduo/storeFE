import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import Main   from "./pages/main";
import {router}   from "./routes/mainRoute";
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store/store'
let persistor = persistStore(store);

function App() {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
      </PersistGate>
    </Provider>
 </React.StrictMode>
  );
}



export default App;
