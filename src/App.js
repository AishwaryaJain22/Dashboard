import './App.css';
import Login from './View/Login';
import Customer from './View/Customer';
import Order from './View/Order';
import Aggrement from './View/Aggrement';
import { Routes, Route } from "react-router-dom";
import MaterialUI from './View/MaterialUI';
import GoogleMap from './View/GoogleMap';
import Practice from './View/Practice';




function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="customer" element={ <Customer/> } />
        <Route path="order" element={ <Order/> } />
        <Route path="aggrement" element={ <Aggrement/> } />
        <Route path="materialUI" element={ <MaterialUI/> } />
        <Route path="googleMap" element={ <GoogleMap/> } />
        <Route path="practice" element={<Practice/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
