
import Footer from './components/Footer'; 
import Home from './views/Home'; 
import NotFound from './views/NotFound'; 
import Navbar from './components/Navbar'; 
import Cart from './views/Cart'; 
import Register from './views/Register'; 
import Loggin from './views/Loggin'; 
import Profile from './views/Profile'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() { 
  return ( 
    <> 
      <BrowserRouter> 
        <Navbar /> 
        <Routes> 
          <Route path="/" element={ <Home /> } /> 
          <Route path="/Register" element={ <Register /> } /> 
          <Route path="/Loggin" element={ <Loggin /> } /> 
          <Route path="/Cart" element={ <Cart /> } /> 
          <Route path="/Profile" element={ <Profile /> } /> 
          <Route path="*" element={ <NotFound /> } /> 
        </Routes> 
      </BrowserRouter> 
      <Footer /> 
    </> 
  ); 
}

export default App;