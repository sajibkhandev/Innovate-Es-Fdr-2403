import React from 'react'
import {createRoutesFromElements,createBrowserRouter,Route,RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Price from './pages/Price';
import Blog from './pages/Blog';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/service" element={<Service />}></Route>
    <Route path="/portfolio" element={<Portfolio />}></Route>
    <Route path="/price" element={<Price />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
   </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App