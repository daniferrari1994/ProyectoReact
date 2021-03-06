import React, { useContext } from 'react';
import './styles.scss';
import CartWidget from '../CartWidget';
import { Cart } from '../../context/CartProvider';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import CartContainer from '../CartContainer';
import { Link } from 'react-router-dom';
import Logo from './../../assets/Asus-Logo.png';

const NavBarPage = () => {
    const { cartQuantity } = useContext(Cart);

    return (
        <>
            <nav className='navbar navbar-light bg-light fixed-top'>
                <div className='container-fluid'>
                    <img src={Logo} alt="Logo" className='logoPagina'/>
                    <Link className='navbar-brand' to={"/"}>Inicio</Link>
                    <Link className='navbar-brand' to={"/brandname/asustuf"}>Asus Tuf</Link>
                    <Link className='navbar-brand' to={"/brandname/asusrogstrix"}>Asus Rog</Link>
                    <button className='navbar-toggler position-relative' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        { cartQuantity ? <CartWidget/> : <FontAwesomeIcon icon={faCartShopping}/>}  
                    </button>
                    <div className='offcanvas offcanvas-end' tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className='offcanvas-header'>
                            <h5 className='offcanvas-title' id="offcanvasNavbarLabel">Cart</h5>
                            <button type="button" className='btn-close text-reset' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className='offcanvas-body'>
                            <div>
                                <CartContainer/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBarPage;