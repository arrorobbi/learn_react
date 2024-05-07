import './App.css';
import {
//   createBrowserRouter,
//   RouterProvider,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import React from 'react'
import ValorantPage from './pages/valorant';
import InitiatorPage from './pages/intiator';
import DuelistPage from './pages/duelist';
import SentinelPage from './pages/sentinel';
import ControllerPage from './pages/controller';
import GekkoPage from './pages/geko';
import FadePage from './pages/fade';
import BreachPage from './pages/breach';
import RazePage from './pages/raze';
import ChamberPage from './pages/chamber';
import KayPage from './pages/kayo';
import SkyePage from './pages/skye';
import ChyperPage from './pages/chyper';
import SovaPage from './pages/sova';
import KilljoyPage from './pages/killjoy';
import HarborPage from './pages/harbor';
import ViperPage from './pages/viper';
import PhoenixPage from './pages/phoenix';
import AstraPage from './pages/astra';
import BrimstonePage from './pages/brimstone';
import NeonPage from './pages/neon';
import YoruPage from './pages/yoru';
import SagePage from './pages/sage';
import ReynaPage from './pages/reyna';
import OmenPage from './pages/omen';
import JettPage from './pages/jett';

function App() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path='/valorant' element={<ValorantPage/>} />
        <Route path='/' element={<ValorantPage/>} />
        <Route path='/valorant/initiator' element={<InitiatorPage/>} />
        <Route path='/valorant/sentinel' element={<SentinelPage/>} />
        <Route path='/valorant/duelist' element={<DuelistPage/>} />
        <Route path='/valorant/controller' element={<ControllerPage/>} />
        <Route path='/valorant/gekko' element={<GekkoPage/>} />
        <Route path='/valorant/fade' element={<FadePage/>} />
        <Route path='/valorant/breach' element={<BreachPage/>} />
        <Route path='/valorant/raze' element={<RazePage/>} />
        <Route path='/valorant/chamber' element={<ChamberPage/>} />
        <Route path='/valorant/KAY/O' element={<KayPage/>} />
        <Route path='/valorant/skye' element={<SkyePage/>} />
        <Route path='/valorant/cypher' element={<ChyperPage/>} />
        <Route path='/valorant/sova' element={<SovaPage/>} />
        <Route path='/valorant/killjoy' element={<KilljoyPage/>} />
        <Route path='/valorant/harbor' element={<HarborPage/>} />
        <Route path='/valorant/viper' element={<ViperPage/>} />
        <Route path='/valorant/phoenix' element={<PhoenixPage/>} />
        <Route path='/valorant/astra' element={<AstraPage/>} />
        <Route path='/valorant/brimstone' element={<BrimstonePage/>} />
        <Route path='/valorant/neon' element={<NeonPage/>} />
        <Route path='/valorant/yoru' element={<YoruPage/>} />
        <Route path='/valorant/sage' element={<SagePage/>} />
        <Route path='/valorant/reyna' element={<ReynaPage/>} />
        <Route path='/valorant/omen' element={<OmenPage/>} />
        <Route path='/valorant/jett' element={<JettPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
