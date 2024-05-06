import './App.css';
import {
//   createBrowserRouter,
//   RouterProvider,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import React from 'react'
import HomePage from './pages/home';
import ValorantPage from './pages/valorant';

function App() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/valorant' element={<ValorantPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
