/* eslint-disable react/jsx-key */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import Private from './layouts/Private';
import Login from './pages/Login';
import HttpStatusCat from './pages/HttpStatusCat';
import Users from './pages/Users';
import CustomerManagement from './layouts/CustomerManagement';
import AuthProvider from './contexts/AuthContext';
import RandomDog from './pages/RandomDog';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={ <Private /> }>
      <Route index element={ <Users /> } />
      <Route path="http-status-cat" element={ <HttpStatusCat /> } />
      <Route path="random-dog" element={ <RandomDog /> } />
      <Route path="customers" element={ <CustomerManagement /> }>
        <Route index element={ <h2>Customer List</h2> } />
        <Route path="edit" element={ <h2>Customer Edit</h2> } />
      </Route>
    </Route>,
    <Route path="/login" element={ <Login /> } />,
  ]),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ router } />
    </AuthProvider>
  </React.StrictMode>,
);
