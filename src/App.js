import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';

import Register from './components/Register/Register';
import ErrorPage from './components/ErrorElement/ErrorPage';
import Login from './components/Login/Login';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  // ldskf
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
