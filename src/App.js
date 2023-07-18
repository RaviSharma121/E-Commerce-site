import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import ProductList from './features/product/components/ProductList';
import NavBar from './features/navbar/NavBar';
import Login from './features/auth/components/Login';
import Cart from './features/cart/Cart';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import './App.css';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
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
    element:<LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element:<SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element:<CartPage></CartPage>
  },
  {
    path: "/checkout",
    element:<Checkout></Checkout>
  },
  {
    path: "/product-detail/:id",
    element:<ProductDetailPage></ProductDetailPage>
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
