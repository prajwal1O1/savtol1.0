import NB from './components/NB'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import Services from './components/Services';
// import SolarCalculator from './components/SolarCalculator';
// import Aboutus from './components/Aboutus';
// import Panels from './components/Panels';
// import BatteryStorage from './components/BatteryStorage';
// import Inverters from './components/Inverters';

function App() {
  return (
    <BrowserRouter>
   <NB/>
   
   
     
    
     
    <Routes>
     
     <Route path="/" element={<Home/>}> </Route>
      <Route path="/Services" element={<Services/>}> </Route>
    {/*<Route path="/Aboutus" element={<Aboutus/>}> </Route>
    <Route path="/Panels" element={<Panels/>}> </Route>
    <Route path="/BatteryStorage" element={<BatteryStorage/>}> </Route>
    <Route path="/Inveters" element={<Inverters/>}> </Route> */}




    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
