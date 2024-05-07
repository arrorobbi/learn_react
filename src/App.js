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
import InitiatorPage from './pages/intiator';
import DuelistPage from './pages/duelist';
import SentinelPage from './pages/sentinel';
import ControllerPage from './pages/controller';
import Gekko from './pages/geko';


function App() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/valorant' element={<ValorantPage/>} />
        <Route path='/valorant/initiator' element={<InitiatorPage/>} />
        <Route path='/valorant/sentinel' element={<SentinelPage/>} />
        <Route path='/valorant/duelist' element={<DuelistPage/>} />
        <Route path='/valorant/controller' element={<ControllerPage/>} />
        <Route path='/valorant/gekko' element={<Gekko/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
