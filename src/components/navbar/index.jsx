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
                    <h4><Link className='navbar-brand' to={"/brandname/asustuf"}>Asus Tuf</Link></h4>
                    <h4><Link className='navbar-brand' to={"/brandname/asusrogstrix"}>Asus Rog</Link></h4>
                    <button className='navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </button>
                    <div className='offcanvas offcanvas-end' tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className='offcanvas-header'>
                            <h5 className='offcanvas-title' id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className='btn-close text-reset' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                                <li className='nav-item'>
                                    <a className='nav-link active' aria-current="page" href="http://localhost:3000/">Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="http://localhost:3000/">Link</a>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle' href="http://localhost:3000/" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                        <ul className='dropdown-menu' aria-labelledby="offcanvasNavbarDropdown">
                                            <li><a className='dropdown-item' href="http://localhost:3000/">Action</a></li>
                                            <li><a className='dropdown-item' href="http://localhost:3000/">Another action</a></li>
                                            <li><hr className='dropdown-divider'/></li>
                                            <li><a className='dropdown-item' href="http://localhost:3000/">Something else here</a></li>
                                        </ul>
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