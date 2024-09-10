import pizzaImg from '../img/pizzamia.png';
import React, { useState } from 'react';
import Loggin from '../views/Loggin';
import Register from '../views/Register';
import Cart from '../views/Cart';
import Profile from '../views/Profile';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mostrarLoggin, setMostrarLoggin] = useState(false);
    const [mostrarRegistro, setMostrarRegistro] = useState(false);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [mostrarProfile, setMostrarProfile] = useState(false);
    
    
    const total = 0;
    const isLoggedIn = true;

   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-green">
            <div className="container">
                <a className="navbar-brand ms-2"><img src={pizzaImg} alt="pizza" className="pizza" /></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="container-fluid justify-content-start">
                        <div className="navbar-nav ms-auto ps-2">
                            <Link  to="/">
                            <button className="btn btn-outline-light me-2" type="button" >🏠 Home</button>
                            </Link>
                            {isLoggedIn ? (
                                <> 
                                    
                                    <Link to="Loggin"><button className="btn btn-outline-light me-2" type="button" onClick={ () => setMostrarLoggin(true)} >🔐 Login</button></Link>
                                    <Link to="/Register"><button className="btn btn-outline-light me-2" type="button" onClick={ () => setMostrarRegistro(true)} >🔐 Register</button></Link>                                    
                                    <Link to="/Profile"><button className="btn btn-outline-light me-2" type="button" onClick={ () => setMostrarProfile(true)}>🔒 Profile</button></Link>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-outline-light me-2" type="button">🔒 Profile</button>
                                    <button className="btn btn-outline-light me-2" type="button">🔒 Logout</button>
                                </>
                            )}
                        </div>
                    </form>
                    <div className="navbar-nav ms-auto ps-2">
                        <Link to="/Cart"><button className="btn btn-outline-primary me-2" type="button" onClick={setMostrarCarrito}>🛒 Carrito: $ {total.toLocaleString()}</button></Link>
                    </div>
                </div>
            </div>
            {mostrarLoggin && <Loggin abierto={mostrarLoggin} CloseLog={() => setMostrarLoggin(false)} />}
            {mostrarRegistro && <Register openFormulario={mostrarRegistro} closeRegister={() => setMostrarRegistro(false)} />}
            {mostrarProfile && <Profile openFormulario={mostrarProfile} closeRegister={() => setMostrarProfile(false)} />}        
            {mostrarCarrito && <Cart />} 
              
        </nav>
    );
};

export default Navbar;