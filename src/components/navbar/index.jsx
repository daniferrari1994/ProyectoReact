import React from 'react';
import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

const NavBarPage = () => {
    return (
        <>
            <nav className='navbar navbar-light bg-light fixed-top'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to={"/"}>Logo Pagina</Link>
                    <button className='navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </button>
                    <div className='offcanvas offcanvas-end' tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className='offcanvas-header'>
                            <h5 className='offcanvas-title' id="offcanvasNavbarLabel">Cart</h5>
                            <button type="button" className='btn-close text-reset' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                                <li className='nav-item'>
                                    <Link className='navbar-brand' to={"/brandname/asustuf"}>Asus Tuf</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='navbar-brand' to={"/brandname/asusrogstrix"}>Asus Rog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBarPage;