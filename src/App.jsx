import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Ragistration from './page/ragistration/Ragistration';
import Login from './page/login/Login';



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Ragistration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App