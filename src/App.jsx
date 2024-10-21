
import './App.css';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import RootLayOut from './components/RootLayOut';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

import { lazy,Suspense } from 'react';
const Technologies=lazy(()=>import("./components/Technologies"))

//import Technologies from './components/Technologies';
import UserManagement from './components/Assignments/Assign-6/UserManagement';
import UserProfile from './components/UserProfile'
import Java from './components/Java';
import Vue from './components/Vue';
import Node from './components/Node';
import RoutingError from './components/RoutingError';

function App(){
 
  //routing configuration
  const browserRouterObject=createBrowserRouter([
    {
      path:"",
      errorElement:<RoutingError />,
      element:<RootLayOut />,
      children:[
        {
          path:"",
          element:<Home />
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:"user-profile/:username",
          element:<UserProfile />
        },
        {
          path:'technologies',
          element:<Suspense fallback='loading...'><Technologies /></Suspense>,
          children:[
            {
              path:'java',
              element:<Java />
            },
            {
              path:'node',
              element:<Node />
            },
            {
              path:'vue',
              element:<Vue />
            }
          ]
        }
      ]
    }
  ])


  return(

    <RouterProvider router={browserRouterObject} />
    
   )
  
}
export default App;