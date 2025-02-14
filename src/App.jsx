import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/Body';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Body/>} />
       
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
