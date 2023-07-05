import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Productlist from './features/product.list/ProductList';
import NavBar from './features/navbar/NavBar';
import Login from './features/auth/components/Login';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import './App.css';
import SignupPage from './pages/SignupPage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from './features/auth/components/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element:<Login></Login>
  },
  {
    path: "/signup",
    element:<Signup></Signup>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      

    </div>
  );
}

export default App;
